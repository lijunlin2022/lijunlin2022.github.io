# 仿拼多多分享商品，canvas 绘制图片时如何实现 contain 和 cover 效果？

最近一个月，正在做分享好友的需求，类似于拼多多的分享图片。

![](./img/pdd.jpg)

分享图片时，最终实现的效果如下：

![](./img/product.png)

## contain 效果

![](./img/canvas-contain.png)

## imgRatio < canvasRatio

![](./img/canvas-contain-imgRatio-le-canvasRatio.png)

## imgRatio > canvasRatio

![](./img/canvas-contain-imgRatio-ge-canvasRatio.png)

```js
function drawContainImage({
  ctx, img, x, y, width, height, fillStyle
}) {
  if (fillStyle) {
    ctx.fillStyle = fillStyle
    ctx.fillRect(x, y, width, height)
  }
  const canvasRatio = width / height
  const imgRatio = img.width / img.height

  let dx = 0, dy = 0, dw = 0, dh = 0
  if (imgRatio <= canvasRatio) {
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

![](./img/canvas-cover.png)

## imgRatio > canvasRatio

![](./img/canvas-cover-imgRatio-ge-canvasRatio.png)

## imgRatio < canvasRatio

![](./img/canvas-cover-imgRatio-le-canvasRatio.png)

```js
function drawCoverImage({
  ctx, img, x, y, width, height, fillStyle
}) {
  if (fillStyle) {
    ctx.fillStyle = fillStyle
    ctx.fillRect(x, y, width, height)
  }
  const canvasRatio = width / height
  const imgRatio = img.width / img.height

  let sx = 0, sy = 0, sw = 0, sh = 0
  if (imgRatio <= canvasRatio) {
    sw = img.width
    sh = sw / canvasRatio
    sx = 0
    sy = (img.height - sh) / 2
  } else {
    sh = img.height
    sw = sh * canvasRatio
    sx = (img.width - sw) / 2
    sy = 0
  }

  ctx.drawImage(img, sx, sy, sw, sh, x, y, width, height)
}
```

## 完整代码

完整代码如下，你可以在 codepen 或者码上掘金上查看：

- 码上掘金: https://code.juejin.cn/pen/7388885726391992371

## 总结

## 参考文章

- [canvas drawImage 绘图实现 contain 和 cover 的效果](https://www.cnblogs.com/AIonTheRoad/p/14063041.html)
- [在容器内显示图片的五种方案：contain、cover、fill、none、scale-down](https://developer.aliyun.com/article/916087)
