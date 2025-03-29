# 从拼多多分享商品说起，canvas 绘图如何实现 contain 和 cover 效果？

我们偶尔会在一些 H5、小程序中，看到分享商品的功能。比如拼多多小程序中，用户可以把商品分享给自己的好友。分享图主要由 2 张图片组成，一张商品图，一张背景图。

![](./img/pdd.jpg)

商品图通常由商家自己配置，尺寸会变动，一般是 contain 效果；背景图通常由 UI 提供，尺寸固定，一般是 cover 效果。

![](./img/contain-and-cover.png)

如果使用 css，我们可以给 `background-size` 设置 `contain` 和 `cover`，可惜这类分享图基本由 canvas 绘制而成。canvas 只提供了 [drawImage()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage) 绘制图片，无法精准实现 `contain` 和 `cover` 效果，于是我实现了 `drawContainImage` 和 `drawCoverImage` 两个工具函数。

本文我会先分析 contain 效果的`图片宽高比`和`容器宽高比`，并给出 drawContainImage 工具函数；再分析 cover 效果的`图片宽高比`和`容器宽高比`，并给出 drawCoverImage 工具函数；最后我会用两个工具函数，绘制如下分享图：

![](./img/product.png)

我是「小霖家的小龙虾」，关注我，为你端上有料、有温度的前端技术菜肴。

## contain 效果

先来看 contain 效果。contain 效果是「缩放图片以**完全装入**容器」，它会有两种情况：

- 图片宽高比 < 容器宽高比，缩放后图片宽度 < 容器宽度，图片高度 = 容器高度。
- 图片宽高比 > 容器宽高比，缩放后图片宽度 = 容器宽度，图片高度 < 容器高度。

![](./img/canvas-contain.png)

不难看出，contain 效果下，图片总是完整展示的，因此我们不必考虑裁剪图片。[drawImage](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage) 的 9 个参数中，我们只需要考虑 5 个参数：

> - `image`，画布图像源。
> - `dx`，image 的左上角在目标画布上 X 轴坐标。
> - `dy`，image 的左上角在目标画布上 Y 轴坐标。
> - `dw`，image 在目标画布上绘制的宽度。
> - `dh`，image 在目标画布上绘制的高度。

### 图片宽高比 < 容器宽高比

图片宽高比 < 容器宽高比时，dy，dw 和 dh 可以直观看出来，而 dx 还需要单独计算。如下图所示：

![](./img/canvas-contain-imgRatio-le-canvasRatio.png)

- dx 是 image 的左上角在目标画布上 X 轴坐标，`dx = (width - dw) / 2`；
- dy 是 image 的左上角在目标画布上 Y 轴坐标，`dy = 0`；
- dw 是 image 在目标画布上绘制的宽度，`dw = imgRatio * width`；
- dh 是 image 在目标画布上绘制的高度，`dh = height`。

### 图片宽高比 > 容器宽高比

图片宽高比 > 容器宽高比时，dx，dw 和 dh 可以直观看出来，而 dy 还需要单独计算。如下图所示：

![](./img/canvas-contain-imgRatio-ge-canvasRatio.png)

- dx 是 image 的左上角在目标画布上 X 轴坐标，`dx = 0`；
- dy 是 image 的左上角在目标画布上 Y 轴坐标，`dy = (height - dh) / 2`；
- dw 是 image 在目标画布上绘制的宽度，`dw = width`；
- dh 是 image 在目标画布上绘制的高度，`dh = dw / imgRatio`。

### drawContainImage 代码

下面是 drawContainImage 的代码，因为 contain 效果一般会留有空白，所以我增加了一个 fillStyle 参数，用来设置空白部分的颜色。

```js
function drawContainImage({
  ctx, img, x, y, width, height, fillStyle
}) {
  if (fillStyle) {
    ctx.fillStyle = fillStyle
    ctx.fillRect(x, y, width, height)
  }
  const boxRatio = width / height
  const imgRatio = img.width / img.height

  let dx = 0, dy = 0, dw = 0, dh = 0
  if (imgRatio <= boxRatio) {
    dw = imgRatio * width
    dh = height
    dx = (width - dw) / 2
    dy = 0
  } else {
    dw = width
    dh = dw / imgRatio
    dx = 0
    dy = (height - dh) / 2
  }
  ctx.drawImage(img, x + dx, y + dy, dw, dh)
}
```

## cover 效果

再看 cover 效果，cover 效果是「缩放图片以**完全覆盖**容器」。如下示意图所示，缩放后图片（红色部分）比容器（绿色部分）大。它会有两种情况：

- 图片宽高比 > 容器宽高比，缩放后图片宽度 = 容器宽度，图片高度 > 容器高度。
- 图片宽高比 < 容器宽高比，缩放后图片宽度 < 容器宽度，图片高度 = 容器高度。

![](./img/canvas-cover.png)

不难看出，contain 效果下，图片总是需要裁剪图片，所以 [drawImage](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage) 的 9 个参数我们都需要使用：

> - `image`，画布图像源。
> - `sx`，image 的矩形（裁剪）选择框的左上角 X 轴坐标。
> - `sy`，image 的矩形（裁剪）选择框的左上角 Y 轴坐标。
> - `sw`，image 的矩形（裁剪）选择框的宽度。
> - `sh`，image的矩形（裁剪）选择框的高度。
> - `dx`，image 的左上角在目标画布上 X 轴坐标。
> - `dy`，image 的左上角在目标画布上 Y 轴坐标。
> - `dw`，image 在目标画布上绘制的宽度。
> - `dh`，image 在目标画布上绘制的高度。

幸运的是，contain 效果下，dx, dy, dw 和 dh 的取值都是固定的，所以我们需要着重考虑的只有 sx, sy, sw 和 sh 这 4 个参数。

### 图片宽高比 > 容器宽高比

图片宽高比 > 容器宽高比时，sy，sw 和 sh 可以直观看出来，而 sx 还需要单独计算。如下图所示：

![](./img/canvas-cover-imgRatio-ge-canvasRatio.png)

- sx 是 image 裁剪选择框（绿色部分）的左上角 X 轴坐标，`sx = (img.width - sw) / 2`；
- sy 是 image 裁剪选择框（绿色部分）的左上角 Y 轴坐标，`sy = 0`；
- sw 是 image 裁剪选择框（绿色部分）的宽度，`sw = sh * boxRatio`；
- sh 是 image 裁剪选择框（绿色部分）的高度，`sh = img.height`。

### 图片宽高比 < 容器宽高比

图片宽高比 < 容器宽高比时，sx, sw 和 sh 可以直观看出来，而 sy 还需要单独计算。如下图所示：

![](./img/canvas-cover-imgRatio-le-canvasRatio.png)

- sx 是 image 裁剪选择框（绿色部分）的左上角 X 轴坐标，`sx = 0`；
- sy 是 image 裁剪选择框（绿色部分）的左上角 Y 轴坐标，`sy = (img.height - sh) / 2`；
- sw 是 image 裁剪选择框（绿色部分）的宽度，`sw = img.width`；
- sh 是 image 裁剪选择框（绿色部分）的高度，`sh = sw / boxRatio`。

### drawCoverImage 代码

下面是 drawCoverImage 的代码，因为 cover 效果不会留空白，所以不需要 fillStyle 参数。

```js
function drawCoverImage({
  ctx, img, x, y, width, height
}) {
  const boxRatio = width / height
  const imgRatio = img.width / img.height

  let sx = 0, sy = 0, sw = 0, sh = 0
  if (imgRatio <= boxRatio) {
    sw = img.width
    sh = sw / boxRatio
    sx = 0
    sy = (img.height - sh) / 2
  } else {
    sh = img.height
    sw = sh * boxRatio
    sx = (img.width - sw) / 2
    sy = 0
  }

  ctx.drawImage(img, sx, sy, sw, sh, x, y, width, height)
}
```

## 完整代码

完整代码可以在码上掘金上查看：https://code.juejin.cn/pen/7388885726391992371

## 总结

本文我分析了 contain 效果、cover 效果的`图片宽高比`和`容器宽高比`关系，并给出 drawContainImage 和 drawCoverImage 工具函数，最后用两个工具函数，绘制了一个商品分享图。

我是「小霖家的小龙虾」，关注我，为你端上有料、有温度的前端技术菜肴。

## 参考文章

- [canvas drawImage 绘图实现 contain 和 cover 的效果](https://www.cnblogs.com/AIonTheRoad/p/14063041.html)
- [在容器内显示图片的五种方案：contain、cover、fill、none、scale-down](https://developer.aliyun.com/article/916087)
