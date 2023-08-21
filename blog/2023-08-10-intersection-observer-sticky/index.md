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

第二个方法，实现方式需要一直监听滚动，调用目标元素的 `getBoundingClientRect()` 方法，得到它对应视口上方的坐标，再判断它是否在视口内，即便加了节流函数，scroll 事件依然会频繁触发，对性能依然有较大影响。

[^1]: [杀了个回马枪，还是说说 position:sticky 吧](https://www.zhangxinxu.com/wordpress/2018/12/css-position-sticky/)

今天我们来介绍使用 `IntersectionObserver` 来实现吸顶动效。

## 顶线才是需要监听的元素

`IntersectionObserver` 的使用方法，阮一峰老师的 [IntersectionObserver API 使用教程](https://ruanyifeng.com/blog/2016/11/intersectionobserver_api.html) 中已经有详细的说明，我们就不赘述了。

我们需要注意的是，IntersectionObserver 一般会触发两次。一次是目标元素刚刚进入视口（开始可见），另一次是目标元素完全离开视口（开始不可见）。

因此，我们需要额外注意区分这两种时机。

在实现吸顶的过程中，我们并不会直接监听需要吸顶的元素。因为目标元素一旦吸顶，就会一直处于视口内，这样就没办法判断什么时候应该取消吸顶了。

我们的做法是，在目标元素上方，创建一条看不见的顶线。也就是我们示例中的 id 为 `ceiling-line` 的线条。

当顶线离开视口时，便是需要吸顶的时机。当顶线进入视口时，就需要取消吸顶了。

[IntersectionObserver 实现吸顶](https://codepen.io/lijunlin2022/pen/OJrJePE)

## 吸顶后需要添加占位符

此外，另一个需要注意的地方就是，当目标元素吸顶后。因为目标元素的 `position` 变为了 `fixed`，会直接脱离文档流。

此时如果没有一个占位符，将目标元素原本的位置占好，那么下方的元素就会挤占目标元素的位置。如果目标元素比较高且颜色比较显眼，它吸顶后页面就有很强的闪烁感。用户体验并不友好。