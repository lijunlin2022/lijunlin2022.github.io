# H5 上拉加载（触底加载）如何实现

今天来谈一下 H5 非常常见的上拉加载（触底加载）如何实现。

我实现的效果如下，滚动列表，滚动到列表底部时会看到加载动画，此时正在请求数据，新数据请求成功后，会被插入到列表底部。再次滚动列表，又会看到加载动画，列表又会请求下一页数据，如此循环往复，直到服务端再也没有更多数据返回。

![](./img/pull-up.gif)

首先我会讲解下拉的原理，并简单说明 IntersectionObserver 的用法，然后我会解释关键代码，接着我会说出下拉加载需要注意的两个问题并给出解决方案，最后我会做个总结。

## 上滑的原理

![](./img/principle.png)

## 上滑的关键代码

### 布局代码

```html
<div class="box">
  <div id="list">
    <div class="item">0</div>
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
  </div>
  <div class="loader-box">
    <div id="loader"></div>
    <div id="nothing" class="hidden">没有更多了~</div>
  </div>
</div>
```

loader-box 的高度是 80px，按上一节原理中的分析，初始时我们需要让 loader-box 位于视口上方，因此 CSS 代码中我们需要把它的位置向上移动 80px。

```css
.loader-box {
  position: relative;
  top: -80px;
  height: 80px;
}
```

loader-box 中的 loader 是纯 CSS 的加载动画。我们利用 border 画出的一个圆形边框，左、上、右边框是浅灰色，下边框是深灰色：

![](./img/loader.png)

```css
#loader {
  width: 25px;
  height: 25px;
  border: 3px solid #ddd;
  border-radius: 50%;
  border-bottom: 3px solid #717171;
  transform: rotate(0deg);
}
```

开始刷新时，我们给 loader 元素增加一个动画，让它从 0 度到 360 度无限旋转，就实现了加载动画：

![](./img/loading.gif)

```css
#loader {
  ...
  animation: loading 1s linear infinite;
}

@keyframes loading {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

### 逻辑代码

关键逻辑代码非常简单，和原理中一致，只需要元素进入视口，和视口有交叉，我们就可以调用 pullUp 函数。
```js
const loader = document.getElementById('loader')
const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    pullUp()
  }
}, {
  root: null,
  rootMargin: '0px',
  threshold: 0
})

observer.observe(loader)
```

## 上滑效果的两个注意点

### 加载锁

第一点就是，当数据正在加载中时，不能够再次触发加载：

```js
let loadLock = false

function pullUp() {
  ...
  if (loadLock) { return }
  loadData()
}

function loadData() {
  ...
  loadLock = true
  setTimeout(() => {
    ...
    loadLock = false
  }, LOADING_TIME)
}
```

### 加载动画与加载完成切换

```js
let hasMore = true

function pullUp() {
  if (!hasMore) { return }
  ...
  loadData()
}

function loadData() {
  ...
  setTimeout(() => {
    if (len >= LIST_LIMIT_CNT) {
      loader.className = "hidden"
      nothing.className = ""
      hasMore = false
      return
    }
    ...
  }, LOADING_TIME);
}
```

## 示例代码

[上拉加载、触底加载 | codepen](https://codepen.io/lijunlin2022/pen/OJrJePE)

## 总结

首先我会讲解下拉的原理，并简单说明 IntersectionObserver 的用法，然后我会解释关键代码，接着我会说出下拉加载需要注意的两个问题并给出解决方案，最后我会做个总结。
