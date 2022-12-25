# 如何判断数据类型

最近我在阅读 [underscore.js](https://underscorejs.org/) 的源代码，发现它经常使用 `tagTester` 这个函数来判断数据类型。

```js
import { toString } from '_setup.js'

export default function tagTester (name) {
  var tag = '[object ' + name + ']'
  return function (obj) {
    return toString.call(obj) === tag
  }
}
```

其中 toString 就是 Object.prototype.toSring，我比较在意的是，为什么 tagTester 要返回一个函数呢？

以 isNumber 为例：

```js
import tagTster from './_tagTester.js'

export default tagTester('Number')
```

在实际应用中，我们是希望有如下的效果

```js
console.log(isNumber(3)) // true
console.log(isNumber('3')) // false
```

```js
function tagTester (name) {
  var tag = '[object ' + name + ']'
  return function (obj) {
    return toString.call(obj) === tag
  }
}

var isNumber = tagTester('Number')
var isNumber = tagTester('String')
var isSymbol = tagTester('Symbol')

console.log(isNumber(3))
console.log(isNumber('3'))
```

underscore 巧妙地利用闭包，实现了代码的复用。

如果是我自己写的话，我恐怕会写成这样：

```js
function isNumber (val) {
  return Object.prototype.toString.call(val) === '[object Number]'
}

function isString (val) {
  return Object.prototype.toString.call(val) === '[object String]'
}

function isSymbol (val) {
  return Object.prototype.toString.call(val) === '[object Symbol]'
}
```

> 闭包最重要的一个作用就是把某些变量隐藏起来，让外面的程序不能直接访问。
> 只要不是为了这个目的的闭包，都可以取消。
> 淡然有时候为了组织代码，也会用闭包来进行一下封装，给代码分段。
> 毕竟如果不用模块管理库的话，就会把很多模块都写在一个文件里，看起来确实痛苦。