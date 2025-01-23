# 实现多种图形的绘制

```js
// ... 省略
gl.drawArrays(gl.LINE_STRIP, 0, 3)
```

| 值 | 作用 | 说明 |
| -- | -- | -- |
| gl.POINTS | 点 | 一系列点 |
| gl.LINES | 线段 | 一系列单独的线段，如果顶点是奇数，最后一个点会被忽略 |
| gl.LINE_LOOP | 闭合线 | 一系列连接的线段，结束时，会闭合终点和起点 |
| gl.LINE_STRIP | 线条 | 一系列连接的线条，不会闭合终点和起点 |
| gl.TRIANGLES | 三角形 | 一系列单独的三角形 |
| gl.TRIANGLE_STRIP | 三角带 | 一系列条带状的三角形 |
| gl.TRIANGLE_FAN | 三角形 | 飘带状三角形 |
