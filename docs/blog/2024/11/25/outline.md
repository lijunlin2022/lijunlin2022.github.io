标题：小程序无用组件检测如何设计？

背景：小程序组件越来越多，且被页面引用，但是实际由于实验完全没有用到，应该怎么检查。

思路：首先获取全体组件名单，然后获取有流量的组件的名单，二者相减后，就得到了无流量的组件。

获得全体组件名单思路：微信小程序组件基础文件有 4 个，wxml、wxss、js 和 json，其中组件的 json 中，总是有 `"component": true` 这个属性。你可以扫描所有的文件夹，如果文件夹内部有 json，且 json 内部有 `"component": true`，则和它同名的 wxml 文件就可以认定为一个组件。 

```js
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

  console.log(results)
  return results;
}

// 判断是否为组件
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

获取有流量组件名单思路：给每一个组件打点，如果组件走到 attached 生命周期，就上报一条记录，最后就能得到所有有流量的组件。

不过，如果给所有组件直接插入代码打点，工作量会非常庞大，如果有人新增组件，也可能忘记这条逻辑，所有我们需要其他方式。

介绍这个方式前，我先介绍一些小程序中，behavior 的概念。小程序中可以利用 Behavior 给组件生命周期内插入一段逻辑。

基础用法为：

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
```

这种方法类似 Vue 的 mixin 或 React 的 HOC，之后小程序会把 Behavior 和 Component 组件的生命周期融合。

替换生命周期

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

```js
const enhanceBehavior = Behavior({
  lifetimes: {
    attached: function () {
      console.log('enhance component >>>>>: ', this.is)
    }
  }
})

module.exports.enhanceComponent = function (config) {
  const { behaviors = [], ...params } = config || {}
  return Component({
    behaviors: [enhanceBehavior, ...behaviors],
    ...params,
  })
}
```

result 是用于存储所有文件路径的数组，stack 则是用来完成工作的栈

初始情况下，stack 内部是根目录，我们开始读取根目录中的所有文件和子目录；

我们利用 fs.statSyc 获取文件状态信息 stat，如果 stat.isDirectory() 为 true，证明它是一个目录，把它压入栈中，以便之后处理

如果为 false，证明它是一个文件，就放到 result 数组中

我们会不断从栈中取出目录读取文件，直到栈中再也没有目录，这样就实现了获取所有文件路径的功能

