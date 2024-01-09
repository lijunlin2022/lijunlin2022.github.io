---
tags: ['react', 'miniprogram']
---

# 移动端 H5 Tab 如何滚动居中

Tab 是用户界面的一部分，外观是一行或者一列整齐的选项（Tab Item）。当用户点击某个 Item 时，Item 的下方或者右侧会展示新的内容。

Tab 在 PC 端和移动端设备上都很常见，不过移动端的 Tab 会比 PC 端更复杂。为什么呢？因为移动端设备屏幕较窄，往往只能展示 4 ~ 7 个 Item。考虑到用户体验，UI 往往要求程序员额外实现一个效果——点击 Item 后，Item 需要滚动到屏幕中央，具体请看下方的拼多多录屏。

![](./img/pdd.gif)

如果你想实现移动端 Tab 滚动居中，本文或许会对你有所帮助。不过阅读本文前，本文还对读者还有两个小要求。

1. 读者需要明白 Tab 点击高亮如何实现。因为本文只会解释 Tab 滚动原理，不会关注 UI 样式。
2. 读者需要熟悉 Vue，React 或者微信小程序。因为本文示例代码不是原生 JS，而是 Vue、React 和微信小程序。

## Tab 滚动的本质

Tab 滚动，看似是 Item 在滚动，实质是包裹着 Item 的容器在滚动。

下图是 Item 4 从手机屏幕右侧滚动到屏幕左侧的示意图。开始时，包裹 Tab 的容器紧贴手机屏幕左侧，此时 Item 4 位于屏幕右侧。接着容器逐渐往左滚动，Item 4 也往左移动，当 Item 4 恰好位于手机屏幕的中央，手机屏幕左侧到容器左侧的距离就是 distance。

![](./img/scroll-left.png)

在 HTML 中，我们可以使用 [Element.scrollLeft](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollLeft) 来读取和设置元素滚动条到元素左边的位置。因此，只要我们能计算出某个 Item 居中时 distance，就可以让该 Item 居中。那么我们应该如何计算呢？

## Tab 居中时容器应该滚动的距离

下图是 Item 4 在手机屏幕居中时的示意图，屏幕中央有一条线，它把 Item 4 分为左右等宽的两部分，同时也把手机屏幕分为左右等宽的两部分。Item 4 一半的宽度就是 `halfItemWidth`，而手机屏幕一半的宽度就是 `halfScreenWidth`。

我们把 Item 4 左侧到容器左侧的距离称为 `itemOffsetLeft`，手机屏幕到容器左侧的距离称为 `distance`。

![](./img/calculate-scroll-left.png)

观察示意图的几何关系，不难看出这四个值满足如下等式：

```
distance + halfScreenWidth = itemOffsetLeft + halfItemWidth
```

稍加推导，就可以得到计算 distance 的方法。

```
distance = itemOffsetLeft + halfItemWidth - halfScreenWidth
```

下面我们来看在实际代码中，`itemOffsetLeft`，`halfItemWidth` 和 `halfScreenWidth` 应该如何获取。

- `itemOffsetLeft`，你可以将 [HTMLElement.offsetLeft](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetLeft) 作它的值。
- `halfItemWidth`，你可以把 [HTMLElement.offsetWidth](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetWidth) 除以 2 后作它的值。也可以调用 [Element.getBoundingClientRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect) 获取一个对象 `eleRect`，`eleRect.width / 2` 也可以作它的值。
- `halfScreenWidth`，你可以先调用 [window.innerWidth](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/innerWidth) 获取手机屏幕的完整宽度，再把宽度除以 2 作它的值。

## React 版 Tab 滚动居中

现在我们给出一个 React 实现滚动居中的例子：

[Tab 滚动居中 | codesandbox](https://codesandbox.io/s/center-the-scrollable-tab-using-scrollto-22939z)

```jsx
const tabClick = (index) => {
  setActiveIndex(index)
  const tabList = tabListRef.current
  const tab = tabList.children[index]
  const tabRect = tab.getBoundingClientRect()
  const scrollLeft =
    tab.offsetLeft + tabRect.width / 2 - window.innerWidth / 2
  tabList.scrollLeft = scrollLeft;
}
```

在这个例子中，我们利用 `useRef()` 生成 `tabListRef`，再通过 `tabListRef.current.children[index]` 获取到点击的 Tab 实例。

此外，我们利用 `tab.getBoundingClientRect().width` 替代了 `tab.offsetWidth`，二者的值是一致的。

最后，需要由父容器 tabList 直接调用 `scrollTo()` 方法。

## 微信小程序版 Tab 滚动居中

现在我们给出微信小程序中实现滚动居中的例子：

[Tab 滚动居中 | 微信小程序](https://developers.weixin.qq.com/s/npBjVpmj7XKc)

微信小程序 `scroll-view` 组件中，有 `scroll-left` 这个属性，是指滚动条距离视口左边的距离。如果想实现 Tab 居中，同样可以利用上文我们提到的公式来计算。

```js
tabClick(e) {
  const { dataset: { index }, offsetLeft } = e.currentTarget
  const { windowWidth } = wx.getSystemInfoSync()
  const query = wx.createSelectorQuery()
  query.select(`#item-${index}`).boundingClientRect()
  query.exec((res) => {
    const { width } = res[0]
    const scrollLeft = offsetLeft + width / 2 - windowWidth / 2
    this.setData({
      currentView: index,
      scrollLeft
    })
  })
}
```

由于小程序中的 API 和浏览器中的 API 差异比较大，因此需要我们做一些调整，主要需要注意的点如下：

- Tab 距离父容器左边的距离 `offsetLeft` 要从 `e.currentTarget` 中获取。
- 视口的宽度需要从 `wx.getSystemInfoSync()` 中获取。
- Tab 自身的宽度，需要使用 `wx.createSelectorQuery()` 选取到目标元素后，从 `exec()` 的执行结果中获取。

不过殊途同归，微信小程序 Tab 的滚动居中，和 React Tab 的滚动居中，最终都可以用同样的原理实现。

## Vue2 版 Tab 滚动居中

[Tab 滚动居中 | Vue2](https://codesandbox.io/s/vue-tab-scroll-to-center-qxw4vc)

