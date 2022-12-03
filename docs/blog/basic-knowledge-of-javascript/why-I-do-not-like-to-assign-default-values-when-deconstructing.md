# 为什么我不喜欢解构时赋默认值

## 1. 问题描述

前端同学都知道，ES6 中可以在解构数组、对象时赋默认值。

```js
const [a, b, c = 3] = [1, 2]
console.log(a) // 1
console.log(b) // 2
console.log(c) // 3

const { e, f = 5 } = { e: 4 }
console.log(e) // 4
console.log(f) // 5
```

但我通常只会解构，而不喜欢为对象赋默认值。