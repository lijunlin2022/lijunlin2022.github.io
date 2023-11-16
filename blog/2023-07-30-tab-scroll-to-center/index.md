---
tags: ['react', 'miniprogram']
---

# Tab 滚动居中

大家好，我俊霖。

日常开发中，我们常常要开发这样的选项卡（Tabs）：当某个选项卡（Tab）被点击之后，如果这个 Tab 能够滚动，就会滚动到屏幕中央。以网页版的拼多多为例：

![](./img/01-tab-scroll-to-center.gif)

为了实现滚动居中，一些朋友首先会逐个相加 Tab 的宽度，得到居中时需要滚动的距离，然后利用 `scrollTo()` 实现居中；另一些朋友则使用锚点，利用 `scrollIntoView()` 实现居中。

第一种办法，如果每一个 Tab 的宽度是固定的，计算还比较简单。一旦每个 Tab 的宽度是不固定的，计算将会变得非常复杂。

第二种办法，相比第一种方法要简单，能够处理 Tab 宽度不固定的情况。但由于 `scrollIntoView()` 的配置项（options）中没有居中的相关配置，因此只能保证选中的 Tab 处于视口（Viewport）内，无法实现严格的居中。

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

