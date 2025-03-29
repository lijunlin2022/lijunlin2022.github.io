# 仿百亿补贴，H5 Tabs 和 List 的缓存方案如何设计

逛过百亿补贴的朋友，应该都看过下图的效果。向右滑动时，H5 会切换到新 Tab，加载新 Tab 对应的 List 数据，并把这部分数据缓存下来。

当向左滑动时，可以看到旧 Tab 对应的 List。

![](./img/pdd.gif)

这种缓存方案如何设计呢？我实现设计了一番，发现情况的确比较复杂，便总结了这篇文章。

接下来我会一步步分析百亿补贴对应的功能，并给出这些功能所需要缓存的数据。

我是「小霖家的小龙虾」，关注我，为你端上有料、有温度的前端技术菜肴。

## Tabs 如何缓存

我们首先看下 Tabs 的功能。

![](./img/pdd-tabs.gif)

拼多多的 Tabs 分一级 Tab 和二级 Tab，二级 Tab 还可以展开和收缩。并且切换一级 Tab 时，之前选中的二级 Tab 还能被保留。因此，我们需要记录的一个是二级 Tab 的数据，一个是选中的二级 Tab 下标，还有一个是二级 Tab 是否展开。

```js
const tabs = [{
  id: '',
  name: '',
  subTabs: [{ id: '', name: '' }],
  subIndex: 0,
  subExpanded: false
}]
```

## List 如何缓存

### 第一页的状态

我们再来看下列表的状态。

![](./img/pdd-list.gif)

可以看到，第一页列表出于加载中时，会展示骨架屏；加载完成后，会直接展示数据。此外，我们还需要考虑到接口失败的情况。于是我们需要一个标记，来展示列表的状态。这个标记可以记为 status。

status 有三种状态，分别是 loading（加载中）、finish（加载完毕）、error（加载失败）。我们把 status 再添加到需要缓存的字段中：

```js
const tabs = [{
  id: '',
  name: '',
  subTabs: [{ id: '', name: '' }],
  subIndex: 0,
  subExpanded: false,
  list: [],
  status: 'loading'
}]
```

### 加载更多的状态

![](./img/bottom-status.png)

再看列表底部的状态，目前能看到的状态是一个加载完成的状态，还有一个加载中的状态。

不过加载更多的状态，不适合完全套用之前列表 status 的三种状态。

当列表第一页时，底部状态应该是不展示的。我把底部状态设计为四种，分别是：

init（初始状态）、loading（加载中）、no_more（没有更多了）和 error（加载失败）。因此我们的缓存状态，需要再添加一个 bottomStatus 状态。

接下俩我们需要考虑，当加载下一页时，我们需要知道已经加载了多少页，所以我们还需要记录 pageIndex 这个状态。

```js
const tabs = [{
  id: '',
  name: '',
  subTabs: [{ id: '', name: '' }],
  subIndex: 0,
  subExpanded: false,
  list: [],
  status: 'loading',
  pageIndex: 0,
  bottomStatus: 'init'
}]
```
