---
tags: ['react', 'miniprogram']
---

# 移动端 H5 Tab 滚动居中如何实现

Tab 是用户界面的一部分，外观是一行或者一列整齐的选项按钮。当用户点击某个按钮时，按钮的下方或者右侧会展示新的内容。

Tab 在 PC 端和移动端设备上都很常见，不过移动端的 Tab 会比 PC 端更复杂。为什么呢？因为移动端设备屏幕较窄，往往只能展示 4 ~ 7 个 Tab 按钮。考虑到用户体验，UI 往往要求程序员额外实现一个效果——点击按钮后，按钮需要滚动到屏幕中央，具体请看下方的拼多多录屏。

![](./img/01-tab-scroll-to-center.gif)

如果你恰好被这个效果困扰，那么不必担心。在本文中，我将会解释 Tab 滚动居中的原理，并给出 React、Vue 和微信小程序的示例代码，相信读完本篇文章，你一定能收获满满。

## 计算滚动距离的等式

现在我们介绍一种同样新方法，它同样使用 `scrollTo()`，但是它计算滚动距离（scrollLeft）的等式更简单。且这个等式，在 Tab 宽度不固定时，依然能够成立。请看这种方法的示意图：

![](https://raw.githubusercontent.com/lijunlin2022/draw.io/main/2023-08-04-scroll-to-center.drawio.svg)

当一个 Tab 居中时：

- `offsetWidth / 2` 是 Tab 一半的宽度。
- `offsetLeft` 是 Tab 距离父容器的距离。
- `window.innerWidth / 2` 是屏幕一半的宽度。
- `scrollLeft` 是 Tab 父容器应该滚动的距离。

不难看出：

```
target.offsetWidth / 2 + offsetLeft = window.innerWidth / 2 + scrollLeft
```

简单变化式子后，就可以得出计算滚动距离的等式：

```
scrollLeft = offsetLeft + target.offsetWidth / 2 - window.innerWidth / 2
```

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

