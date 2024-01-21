# H5 不复制元素的循环轮播图如何实现——求模

循环轮播图，你肯定并不陌生。不过让你手写它，你可能感觉有些麻烦。因为大部分方案都得考虑好几种边界情况。

最常见的实现方案——复制头部和尾部元素（如下图，绿色的是原始元素，浅蓝色的是复制元素），就需要考虑 3 种边界情况：

![](./img/old-method.png)

1. 初始化轮播图。你需要注意初始下标不是 0，而是 1，因为轮播列表头部多了一个 Item 4 的复制元素。
2. 轮播图向右滑到达右边界。你需要设置滚动条的 scrollLeft，让视口内 Item 0 的复制元素变为原始元素。
3. 轮播图向左滑到达左边界。你需要设置滚动条的 scrollLeft，让视口内 Item 4 的复制元素变为原始元素。

有没有一种实现轮播图的方案，边界情况非常少，一旦理解后就能快速手写呢？有的，Ant Design Mobile Swiper [^1] 使用的是一种求模的方案，效果如下：

![](./img/antd-mobile.gif)

可以看到，Ant Design Mobile Swiper 不需要复制元素，也不需要添加和移除元素，只需要控制 css 的 translate3d，就可以实现循环轮播。如果你也想知道 Ant Design Mobile Swiper 是如何做到的，看了这篇文章，你一定有所收获。

我会说明不复制元素实现轮播的原理，接着给出计算轮播元素位置的代码，最后再给出完整的示例代码。

这种方法需要用到取模运算，如果你不了解取模运算和取余运算的差别，可以先看我的另一篇文章 [取余运算和取模运算如何区分和应用](https://lijunlin2022.github.io/blog/2024/01/18/remainder-and-modulo)。

## 轮播的原理

先设想一下 5 个元素轮播时，初始顺序应该是什么样的呢？首先，Item 0 肯定不能位于边缘，因为你肯定希望往左滑或者往右滑，都能够看到元素。既然 Item 0 不能位于边缘，干脆让 Item 0 位于中央吧，也就是 Item 0 左右两边都有 2 个元素。

你可以这样做，按照 01234 的顺序往 Item 0 的右侧放置元素，放完 Item 1 和 Item 2 后，右侧已经有 2 个元素了。接下来你把 Item 3 和 Item 4 放置在 Item 0 左边。

![](./img/item0-mod.png)

于是你就得到了初始化时，轮播图的元素顺序：

![](./img/item0-center.png)

现在你可以往右滑动的情况。往右滑动时，位于中央的元素便从 Item 0 变成了 Item 1。依旧延续之前先往 Item 1 右侧摆放元素，再往左侧摆放元素的思路。Item 1 右侧应该放置 Item 2 和 Item 3，左侧应该放置 Item 4 和 Item 0。于是得到

![](./img/item1-mod.png)

![](./img/item1-center.png)

我们分别考虑 Item 0 到 Item 4 位于中央时，元素应该如何摆放，就得到了下面的图：

![](./img/loop.png)

## 计算轮播位置的公式

看了上面的描述，你可能只是大概理解了思路，还不知道该如何写代码，我们先讲下元素的布局吧。

我们先给所以元素设置布局，所有 Item 再轮播容器中排成一行，且定位均为相对定位。此时 Item 0 到 Item 4 都重叠在中央位置。此时 100% 就代表元素 Item 的宽度。

```html
<ul>
  <li style="left: 0%;">0</li>
  <li style="left: -100%">1</li>
  <li style="left: -200%">2</li>
  <li style="left: -300%">3</li>
  <li style="left: -400%">4</li>
</ul>
```

```js
const onBtnClick = () => {
  position = (index - currentIndex) * 100
  finalPosition = mod(position + halfTotalWidth, totalWidth) - halfTotalWidth
  item.style.transform = `translateX(${finalPosition}%)`
}
```

现在我们考虑给 Item 添加 translateX。我们遵循着之前说到的思路，来理解上述代码：

首先是 position = (index - currentIndex) * 100, position 就是 Item 往右放的尝试，

- Item 0 位于中央，那么它的 translateX 应该为 0。
- Item 1 和 Item 2 位于 Item 0 的右侧，它们的 translateX 可以设置为 100% 和 200%。
- Item 3 和 Item 4 位于 Item 0 的左侧，你可能无法一眼看出它们的 translateX 应该是多少。

  不过你可以这样考虑，先继续把 Item 3 和 Item 4 往右侧放置，此时 translateX 应该为 300% 和 400%。
  
  然后你再将 Item3 和 Item 4 往左移动一整个轮播图的位置，也就是 -500%，就得到了它们的 translateX，分别是 -200%（300% - 500%）和 -100%（400% - 500%）。

```html
<ul>
  <li style="left: 0%; transform: translateX(0%);">0</li>
  <li style="left: -100%; transform: translateX(100%);">1</li>
  <li style="left: -200%; transform: translateX(200%);">2</li>
  <li style="left: -300%; transform: translateX(-200%);">3</li>
  <li style="left: -400%; transform: translateX(-100%);">4</li>
</ul>
```

再考虑一下往右移动的情况，此时 Item 的 translateX 应该如何取值呢？

- Item 1 位于中央，那么它的 translateX 应该为 0%。
- Item 2 和 Item 3 位于 Item 1 的右侧，它们的 translateX 可以设置为 100% 和 200%
- Item 4 和 Item 0 位于 Item 1 的左侧。你可以先把它们往 Item 1 右侧放置，此时 translateX 为 300% 和 400%。

  然后你再将 Item 4 和 Item 0 往左移动一整个轮播图的位置，也就是 -500%，就得到了它们的 translateX，分别是 -200%（300% - 500%）和 -100%（400% - 500%）

```html
<ul>
  <li style="left: 0%; transform: translateX(-100%);">0</li>
  <li style="left: -100%; transform: translateX(0%);">1</li>
  <li style="left: -200%; transform: translateX(100%);">2</li>
  <li style="left: -300%; transform: translateX(200%);">3</li>
  <li style="left: -400%; transform: translateX(-200%);">4</li>
</ul>
```

这个 translateX 可以怎么计算呢？我们先给出计算的代码，然后再解释。

[^1]: [Ant Design Mobile Swiper](https://mobile.ant.design/components/swiper)
