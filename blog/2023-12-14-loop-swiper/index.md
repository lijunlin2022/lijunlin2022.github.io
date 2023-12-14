# 无复制元素的循环轮播

大家好，我俊霖。

循环轮播大家都很熟悉。一般的实现方法，需要复制首尾的元素。比如需要轮播的元素是 1234，那么就需要复制 1 和 4，让轮播元素变为 412341。

## Ant Design Mobile Swiper

今天我要介绍一种无复制元素的循环轮播，以及它的原理，它就是 [Ant Design Mobile Swiper](https://mobile.ant.design/components/swiper)。

![](./img/antd-mobile.gif)

如图，可以在控制台看到元素个数始终是 4 个，没有多余的元素。

## 约定

为方便读者理解下文，我需要和读者们做一些约定。

- 轮播组件是整屏的轮播，轮播时只会向左切换一个元素，或者向右切换一个元素。
- 轮播容器称为 List，轮播元素称为 Item。
- List 有 5 个 Item，分别是 Item0 到 Item4。之所以选择 5 个 Item，是因为奇数个 Item 更容易找到 List 的中心。
- currentIndex 代表 List 中心 Item 的下标。轮播到 Item0 时，currentIndex 是 0。轮播到 Item5 时，currentIndex 是 5。

## 初始化

![](./img/item0-center.png)

如图，这是我们初始化时，List 中 Item 的排列。那么它是怎么得到的呢？

![](./img/item0-over-half.png)

如图，有一条蓝色的分割线。Item0，Item1 和 Item2 的位置小于这条分割线，位置没有改变。Item3 和 Item4 的位置超过了这条分割线。分别将 Item3 和 Item4 往前挪动 5 个位置。就得到了初始化的位置。

## Item1 为中心

![](./img/item1-center.png)

![](./img/item1-over-half.png)

## 循环

![](./img/loop.png)
