# 为什么 void 0 === undefined

最近我在阅读 [underscore.js](https://underscorejs.org/) 的源代码，发现它的 isUndefined 函数实现很有意思。

```js
export default function isUndefined (obj) {
  return obj === void 0
}
```

我产生了两个疑问：

1. `void 0` 的作用是什么？
2. 为什么使用 `obj === void 0`，而不使用 `obj === undefined`？

怀着这两个疑问，我开始了探索。

## 1 void 0 的作用是什么

> void 运算符对给定的表达式进行求值，然后返回 undefined。——[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/void) 

也就是说，void 这个运算符的设计目的，就是产生 undefined。

不管 void 后面跟着普通表达式，还是函数表达式，都会产生 undefined。

```js
console.log(void 0 === undefined) // true

console.log(void 1 === undefined) // true

console.log(void (1 + 1) === undefined) // true

console.log(void 'Hello World' === undefined) // true

function func () {
  return 'this is a function'
}

console.log(void func() === undefined) // true
```

至于为什么函数库里用的是 void 0，而不是 void 1 或者其它，应该是约定俗成。

不仅 underscore.js 用 void 0，backbond.js 和 moment.js 也用 void 0。

## 2 为什么使用 obj === void 0，而不是使用 obj === undefined

总结来看有两个原因：

1. void 0 比 undefined 更安全
2. void 0 比 undefined 更短小

### 2.1 为什么 void 0 比 undefined 更安全

undefined 其实是一个属性，虽然 ECMAscript5 标准里规定了 undefined 不能被改写。

但某些情况下 undefined 其实是可以改写的，比如局部作用域中。

::: danger
如果不想被同事打死，就不要写下面的这种代码。
:::

```js
(function() {
  var undefined = 'foo'
  // chrome
  alert(undefined) // foo
})()
```

而 void 0 就不会存在被改写的风险。

### 2.2 为什么 void 0 比 undefined 更短小

void 0 包含空格一共 6 个字符，undefined 一共 9 个字符。显然 void 0 更短。

因此，很多打包工具都会用 void 0 替换代码中的 undefined。

比如微信开发者工具，它在开启将 ES6 代码编译为 ES5 代码选项后，就会用 void 0 替换掉 undefined。

## 3 参考

[void | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/void)

[undefined | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)

[为什么用 void 0 替代 undefined | GitHub](https://github.com/lessfish/underscore-analysis/issues/1)
