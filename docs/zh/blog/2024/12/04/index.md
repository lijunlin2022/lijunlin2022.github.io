# 小程序如何检测无流量组件？分享一种打点检测方法

小程序项目经过长期迭代后，内部会有大量组件。其中有些组件，虽然在页面、组件的 json 中注册了，但实际不会用到（无流量），白白占用了小程序的包体积。这种无流量组件该如何检测呢？

本文我分享一种打点检测方法，它可以较低成本低找出所有无流量的组件。

拳打 H5，脚踢小程序。我是「小霖家的混江龙」，关注我，带你了解更多实用的 H5、小程序武学。

## 思路

我的整体思路分为三部分：

1. 遍历目录，获取全体组件的集合；
2. 给组件打点，获取有流量组件的集合；
3. 取全体组件和有流量组件的差集。

下面我会向你介绍三部分的细节。

## 获取全体组件集合

小程序的组件由 wxml、wxss、js 和 json 等文件组成，其中 json 文件总是有 `"component": true` 这一项。

根据这个特点，我们可以遍历项目中的所有文件，如果有 json 文件，并且 json 文件中有 `"component": true` 这一项，则认为该 json 文件代表一个组件。

主要有两个关键代码：

```js
// 遍历项目中所有文件
const fs = require('fs');
const path = require('path');

// 目标文件夹路径
const targetDir = './';

// 使用栈读取文件夹中的所有文件
function readDirWithStack(dir) {
  let results = [];
  let stack = [dir];

  while (stack.length) {
    const currentDir = stack.pop();
    const list = fs.readdirSync(currentDir);

    list.forEach(file => {
      const filePath = path.resolve(currentDir, file);
      const stat = fs.statSync(filePath);

      if (stat && stat.isDirectory()) {
        stack.push(filePath);
      } else {
        results.push(filePath);
      }
    });
  }

  return results;
}
```

其中，result 是用于存储所有文件路径的数组，stack 则是用来完成工作的栈。初始情况下，stack 内部是根目录，我们开始读取根目录中的所有文件和子目录；

我们利用 fs.statSyc 获取文件状态信息 stat，如果 stat.isDirectory() 为 true，证明它是一个目录，把它压入栈中，以便之后处理

如果为 false，证明它是一个文件，就放到 result 数组中

我们会不断从栈中取出目录读取文件，直到栈中再也没有目录，这样就实现了获取所有文件路径的功能

```js
// 判断 json 是否能代表组件
function isComponent(filePath) {
  const dir = path.dirname(filePath);
  const files = fs.readdirSync(dir);
  const jsonFile = files.find(file => file.endsWith('.json'));
  if (jsonFile) {
    const jsonFilePath = path.join(dir, jsonFile);
    const jsonContent = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
    return jsonContent.component === true;
  }
  return false;
}
```

结合上述两段代码，我们可以获得小程序组件的全集。

## 获取有流量组件的集合

在每一个组件的生命周期里打点，如果走到组件生命周期，就上报一条记录，有记录的组件就是有流量的组件。

不过，如果给所有组件直接插入代码打点，工作量会非常庞大。

你可能想到的第一个优化方法是，小程序可以利用 Behavior 来给生命周期插入一段逻辑。

```js
const myBehavior = Behavior({
  lifetimes: {
    attached() {
      console.log('>>>>> my behavior')
    }
  }
})

Component({
  behaviors: [myBehavior],
  lifetimes: {
    attached() {
      console.log('>>>>> normal behavior')
    }
  }
})

// 输出
// >>>>> my behavior
// >>>>> normal behavior
```

它的缺陷则是，：如果有人新增组件，可能会忘记在 behaviors 中注册 myBehavior，为此，我们需要改进这个方法。

改进的思路是，用一个 enhanceComponent 函数替换所有的 Component 函数。

```js
const enhanceBehavior = Behavior({
  lifetimes: {
    attached: function () {
      console.log('enhance component >>>>>: ', this.is)
    }
  }
})

// 导出的 enhanceComponent 函数，默认就注册了 enhanceBehavior，enhanceBehavior 中我们可以打点
module.exports.enhanceComponent = function (config) {
  const { behaviors = [], ...params } = config || {}
  return Component({
    behaviors: [enhanceBehavior, ...behaviors],
    ...params,
  })
}
```

使用 enhanceComponent 后，组件的 js 变成：

```js
require('../../utils/enhance-component').enhanceComponent({
  properties: {},
  data: {},
  methods: {}
})
```

在组件 js 文件中，不使用 Component 函数创建组件，而是使用 enhanceComponent 函数

这样依然有缺陷，如果有人新增组件时，忘记引入 enhanceComponent 函数，那么这个组件就不会被上报

最好的办法是，我们能够在构建时，将 Component 函数替换为 enhanceComponent 函数。

替换之前，我们需要解决一个问题，那就是路径问题，所幸小程序已经可以通过设置别名。

https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#resolveAlias 

```js
// 替换 Component 函数
function replaceComponentFunction(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const newContent = fileContent.replace(
    /\bComponent\(/g,
    "require('@utils/enhance-component.js').enhanceComponent("
  );
  fs.writeFileSync(filePath, newContent, 'utf8');
}

// 获取所有 .js 文件
const files = readDirWithStack(targetDir).filter(file => file.endsWith('.js'));

// 替换每个文件中的 Component 函数
files.forEach(file => {
  if (isComponent(file)) {
    replaceComponentFunction(file);
  }
});
```

## 取全体组件和有流量组件的差集

经过之前的处理，我们已经获取了全体组件的集合，也获取了有流量组件的集合。

它们都可以用数组来表示。因此我们其中需要做的，就是取两个数组的差集。

```js
const arr1 = ['a', 'b', 'c', 'd', 'e']
const arr2 = ['a', 'b', 'e']

const diff = arr1.filter(item => !arr2.includes(item))

console.log(diff) // ['c', 'd']
```

