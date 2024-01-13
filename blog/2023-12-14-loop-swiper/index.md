# H5 不复制元素的循环轮播图如何实现

过去我一直以为，循环轮播图必须拷贝元素，欺骗用户才能实现。

举例来说，如果实现 Item0 ~ Item4 循环播放，我必须用 7 个元素。多出的 2 个元素，一个是 Item0 的复制品，另一个是 Item4 的复制品，分别被我放在队尾和队头。当轮播图滚动到队头（队尾）的时候，我会调整滚动距离把用户看到的复制品替换为原品。

![](./img/old-method.png)

确实，这种做法简单易懂。但不复制元素，真的不能实现循环轮播吗？各个大厂的轮播图，给了我答案——**不复制元素，也可以实现循环轮播。**

比如，苹果官网的循环轮播图没有复制元素。

![](./img/apple.png)

阿里的 [Ant Design Mobile Swiper](https://mobile.ant.design/components/swiper) 也没有复制元素。

![](./img/antd-mobile.gif)

如果你也想知道，大厂是如何做到不复制元素也能循环轮播的。看了这篇文章，你一定有所收获。我会先解释原理，然后给出计算轮播元素位置的公式，最后再给出原生的 JS 代码。

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
