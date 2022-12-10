# 为什么 js 判断 emoji 的长度不对

## 1. 问题描述

JavaScript 获取 emoji 的长度时，可能会出现一些问题。

```javascript
console.log('✅✅✅'.length) // 3

console.log('❤️❤️❤️'.length) // 6

console.log('👨‍👩‍👦'.length) // 8

console.log('👨‍👩‍👦‍👦'.length) // 11
```

## 2 简要解释

对于一些生僻字，JavaScript 把它当成了当个字

## 3 详细解释

## 4 解决办法

```js
```