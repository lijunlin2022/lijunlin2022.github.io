# 无复制元素的循环轮播

大家好，我俊霖。

循环轮播大家都很熟悉。一般的实现方法，需要复制首尾的元素。比如需要轮播的元素是 1234，那么就需要复制 1 和 4，让轮播元素变为 412341。

## Ant Design Mobile Swiper

[Ant Design Mobile Swiper](https://mobile.ant.design/components/swiper) 的循环轮播，就是一种无复制元素的循环轮播。如下图，可以在控制台看到元素个数始终是 4 个，没有多余的元素。

![](./img/antd-mobile.gif)

它的原理是什么呢？

## 约定

为方便读者理解下文，我需要和读者们做一些约定。

- 轮播组件是整屏的轮播，轮播时只会向左切换一个元素，或者向右切换一个元素。
- 轮播容器称为 List，轮播元素称为 Item。
- List 有 5 个 Item，分别是 Item0 到 Item4。之所以选择 5 个 Item，是因为奇数个 Item 更容易找到 List 的中心。
- currentIndex 代表 List 中心 Item 的下标。轮播到 Item0 时，currentIndex 是 0。轮播到 Item5 时，currentIndex 是 5。

## 轮播原理

**初始化**

下图是初始化时，List 中 Item 的排列。它是怎么得到的呢？

![](./img/item0-center.png)

可以这样理解，初始化时，我们希望 Item0 处于 List 中心时，两边的元素尽可能相等。

我们的做法是，Item0，Item1 和 Item2 位置保持不变。将 Item3 和 Item4 往前挪动 5 个位置。

![](./img/item0-over-half.png)

**Item1 为中心**

下图是 List 从 Item0 轮播到 Item1 时的排列，此时 Item1 处于 List 的中心。

![](./img/item1-center.png)

和初始化时理解方式一致，我们希望 Item1 处于 List 中心时，两边元素尽可能相等。

我们的做法是：Item1，Item2 和 Item3 位置保持不变。将 item4 和 Item1 往前挪动 5 个位置。

![](./img/item1-over-half.png)

**循环**

按照上述步骤，分别列出 List 中心是 Item0 到 Item4 的情况，可以得到下图：

![](./img/loop.png)

一个循环轮播就实现了。

## 代码实现
