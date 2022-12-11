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

对处于基础平面的字，JavaScript 将其当做长度为 1

处于扩展平面的字，JavaScript 将其当做长度为 2

有部分 emoji 相当于是多个字符组合而成。

## 3 详细解释

```js
const arr = '✅'.split('')

// ['✅']
console.log(arr)
```


```js
const arr = '❤️'.split('')

// ['❤️', '']
console.log(arr)
```

```js
const arr = '👨‍👩‍👦'.split('')

// ['\uD83D', '\uDC68', '‍', '\uD83D', '\uDC69', '‍', '\uD83D', '\uDC66']
console.log(arr)
```

```js
const arr = '👨‍👩‍👦‍👦'.split('')

// ['\uD83D', '\uDC68', '‍', '\uD83D', '\uDC69', '‍', '\uD83D', '\uDC66', '‍', '\uD83D', '\uDC66']
console.log(arr)
```

## 4 解决办法

```js
```

## 5 参考

https://github.com/SamHwang1990/blog/issues/2