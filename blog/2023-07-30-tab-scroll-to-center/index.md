---
tags: ['react', 'miniprogram']
---

# 移动端 H5 Tab 如何滚动居中

Tab 是用户界面的一部分，外观是一行或者一列整齐的选项（Tab Item）。当用户点击某个 Item 时，Item 的下方或者右侧会展示新的内容。

Tab 在 PC 端、移动端应用都上很常见，然而 Tab 在移动端 比 PC 端更复杂。为什么呢？移动端设备屏幕较窄，一般仅能展示 4 ~ 7 个 Item。考虑到用户体验，UI 往往要求程序员实现一个功能——点击 Item 后，Item 滚动到屏幕中央，拼多多的 Tab 就实现了这个功能。

![](./img/pdd.gif)

如果你想实现这个功能，本文对你一定有所帮助。要是你能满足下面两个小要求，你的收获会更多：

1. 你知道 Tab 点击后如何实现高亮。因为本文只会解释 Tab 滚动原理，不会关注 UI 样式。
2. 你熟悉 Vue，React 或者微信小程序。因为本文示例代码不是原生 JS，而是 Vue、React 和微信小程序。

「以道驭术」，我会先说明 Tab 滚动的本质，再给出计算混动距离的公式，最后解释 Vue、React 和微信小程序的代码。

## Tab 滚动的本质

Tab 滚动，看似是 Item 在滚动，本质是包裹着 Item 的容器在滚动。

如下图，竖着的虚线长方形代表手机屏幕，横着的长方形代表 Tab 的容器，标着数字的小正方形代表一个个 Tab Item。

图分为左右两部分，左半部分表示 Tab 容器紧贴手机屏幕左侧，右半部分表示 Item 4 位于屏幕中央，合在一起表示 Item 4 从屏幕右边滚动到屏幕中央。

![](./img/scroll-left.png)

不难看出，Item 4 滚动居中，其实就是容器向左移动 distance。反过来说，**让容器向左移动 distance，Item 4 就能居中。** Tab 滚动居中的问题，就是求解 distance 的问题。

## 计算 distance 的公式

distance 是容器左侧到手机屏幕左侧的距离，也是容器向左移动的距离，更具体的说，它是容器滚动条到容器左边缘的距离。

该如何计算 distance 呢？先不要着急，再看下这张更细致的示意图。

屏幕中央有一条线，它把 Item 4 分成了左右等宽的两部分，也把手机屏幕分成了左右等宽的两部分。你可以把 Item 4 一半的宽度记为 `halfItemWidth`，把手机屏幕一半的宽度记为 `halfScreenWidth`。再把 Item 4 左侧到容器左侧的距离记为 `itemOffsetLeft`。

![](./img/calculate-scroll-left.png)

不难看出，这四个值满足如下等式：

```
distance + halfScreenWidth = itemOffsetLeft + halfItemWidth
```

稍加推导，就可以得到计算 distance 的公式。

```
distance = itemOffsetLeft + halfItemWidth - halfScreenWidth
```

## 公式和代码的对应关系

知道 distance 在数学公式中如何计算后，你是否迫不及待地想知道代码中它该如何计算了呢？

先看下 `itemOffsetLeft`、`halfItemWidth` 和 `halfScreenWidth` 如何获取。

- `itemOffsetLeft` 是 Item 元素到容器左侧的距离，你可以用 [HTMLElement.offsetLeft](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetLeft) 作它的值。

- `halfItemWidth` 是 Item 元素一半的宽度。[HTMLElement.offsetWidth](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetWidth) 是元素的整体宽度，你可以用 `offsetWidth / 2` 作它的值。你也可以先用 [Element.getBoundingClientRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect) 获取一个 `itemRect` 对象，再用 `itemRect.width / 2` 作它的值。 

- `halfScreenWidth` 是手机屏幕一半的宽度。 [window.innerWidth](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/innerWidth) 是手机屏幕的整体宽度，你可以用 `innerWidth / 2` 作它的值。

再看下如何把 distance 设置到容器上。

在 HTML 中，我们可以使用 [Element.scrollLeft](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollLeft) 来读取和设置元素滚动条到元素左边的位置。因此，你只需要容器的 `scrollLeft` 赋值为 distance，就可以实现 Item 元素滚动居中。

## 代码示例

### Vue

[Tab 滚动居中 | Vue](https://codesandbox.io/s/vue-tab-scroll-to-center-qxw4vc)

### React

[Tab 滚动居中 | React](https://codesandbox.io/s/center-the-scrollable-tab-using-scrollto-22939z)

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

### 微信小程序

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

