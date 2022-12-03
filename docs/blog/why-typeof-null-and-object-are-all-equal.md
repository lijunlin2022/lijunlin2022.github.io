# 为什么 typeof null === 'object'

## 1 问题描述

前端程序员都知道，`typeof null` 是一个坑，会出现不符合预期的结果。 `typeof null === 'object'`。

更本质的原因是什么呢？

## 2 简要解释

`typeof null === 'object'` 是 JavaScript 中第一个版本中就有的 bug。后来有人想修复这个 bug，但提案没有被接受。

久而久之，这个 bug 就成为大家公认的 feature 了，后续 V8 引擎单独处理了 `typeof null` 的情况。

## 3 详细解释

### 3.1 为何古老的代码中 typeof null === 'object'

目前有关这一 bug，Axel Rauschmayer 找到了 1996 年的老代码（JavaScript 是 1995 年发布的）。

在这一版的代码中，JavaScript 通过 32 bit 来存储值。定义了 5 种类型和 2 个特殊值。

5 种类型是通过 32 位中低 1 位或者低 3 位来识别类型的。

- 0 ---> object
- 1 ---> int
- 010 ---> double
- 100 ---> string
- 110 ---> boolean

2 个特殊值如下：

- undefiend，用整数 `-2^30` 来表示（这个数已经不在整数范围了）
- null，C/C++ 的 NULL，低 3 位也是 000

因此导致了 `typeof null === 'object'`。

但按照 Brendan Eich（JavaScript 设计者）的说法，他之所以这样写，也是为了填 1995 年的坑。

> Hi Axel -- small correction: the code you show is from SpiderMonkey, which I wrote in 1996 to pay off tech debt in Mocha, the first JS implementation from the 10 days in May 1995. Mocha used a discriminated union in C (struct with type tag and union whose arms corresponded to the enumerated tag values). Same bug, though. Just a historical detail. Regards,

翻译：

> Hi Axel 小更正：你展示的代码来自 SpiderMonkey，是我在 1996 年写的，目的是偿还 Mocha 的技术债务。1995 年 5 月 10 日，第一次 JavaScript 实现，Mocha 在 C 语言中使用了一个  discriminated union（discriminated union 是具有类型标记和 union 的结构，它的 arms 和枚举的标记值相对应）。当然 Bug 和这里的是一样的，我只是讲一下历史的细节。
> —— [The history of "typeof null"](https://2ality.com/2013/10/typeof-null.html)


### 3.2 为何现代 V8 引擎代码中 typeof null === 'object'

> 从 V8 源码来看，`typeof null` 是当做一个特殊情况处理的，是个需要兼容的历史包袱。

```c
// 如果 instance_type 是 ODDBALL_TYPE（值为 67）
// 跳转到 if_oddball 执行
GotoIf(
  InstanceTypeEqual(instance_type, ODDBALL_TYPE),
  &if_oddball
)
```

> ODDBALL_TYPE 如果翻译成中文的话，可能会叫奇怪类型，至少从 ODDBALL_TYPE 的命名来看，V8 也认为 null 是一个不走寻常路的类型。
> —— [typeof 与 Javascript 类型源码分析 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/143590829)

## 4 解决办法

如果我们需要判断变量 val 是否为 null 话，可以采用两种办法。推荐采用第一种办法。

```js
// 第一种办法
if (val === null) {
  // ...
}

// 第二种办法
if (Object.prototype.toString.call(val) === '[object Null]') {
  // ...
}
```

## 5 参考

- [The history of "typeof null"](https://2ality.com/2013/10/typeof-null.html)
- [typeof 与 Javascript 类型源码分析 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/143590829)