---
tags: ['IntersectionObserver']
---

# IntersectionObserver 实现吸顶

大家好，我俊霖。

日常开发中，我们常常需要实现吸顶效果。用户向上滚动屏幕时，如果一个元素触碰到视口顶部，就会黏在视口顶部。以网页版的京东为例：

![](./img/01-intersection-observer-sticky.gif)

一些朋友可能想用 `position: sticky;` 来实现这个效果。另一些朋友可能会绑定滚动事件，通过对比滚动的距离和吸顶元素距离顶部的距离，来实现这个效果。

第一个方法，`position: sticky;` 有一个缺陷，它的父元素和祖先元素不能有 `overflow: hidden;`，否则这个定位就会失效。[^1]

而在实际开发中，尤其是我们接手其他人的代码时，要保证父元素和祖先元素没有 `overflow:hidden;`，是非常困难的。

第二个方法，需要一直监听滚动，即便加了节流函数，对性能依然有较大影响。

[^1]: [杀了个回马枪，还是说说 position:sticky 吧](https://www.zhangxinxu.com/wordpress/2018/12/css-position-sticky/)

今天我们来介绍使用 `IntersectionObserver` 来实现吸顶动效。

## options 中的 thresolds

具体写法可以看例子：

[IntersectionObserver 实现吸顶](https://codepen.io/lijunlin2022/pen/OJrJePE)
