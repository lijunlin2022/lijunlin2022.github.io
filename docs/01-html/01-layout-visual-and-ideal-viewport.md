# 布局视口、视觉视口和理想视口

vscode 默认生成的 HTML 中，会看到下面这段代码。这段代码和移动端的适配有关。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

首先，我们需要知道一个概念，视口（viewport），也就是我们在浏览器中看到的区域。[^1]

在移动端，布局的视口和可见的视口并不一样，我们可以将视口分为三种情况：[^2]

- 布局视口（layout viewport）
- 视觉视口（visual viewport）
- 理想视口（ideal viewport）

## 布局视口

默认情况下，一个 PC 端的网页，在移动端会如何显示呢？

1. 它会按照宽度为 980px 来布局一个页面的内容。
2. 为了可以完整地显示在页面中，对整个页面进行缩小。

这个 980px 的视口，就是布局视口（layout viewport）。

## 视觉视口

如果默认情况下，我们按照 980px 显示内容，那么右侧有一部分区域就会无法显示。所以手机端浏览器会默认对页面进行缩放，以显示到用户的可见区域中。

显示在这个可见区域中的，就是视觉视口（visual viewport）。

## 理想视口

默认情况下的 layout view 并不适合我们进行布局，我们可以对 layout viewport 进行宽度和缩放的设置，以满足一个移动端窗口的布局。

| 值 | 可能的附加值 | 描述 |
| -- | -- | -- |
| width | 一个正整数，或者字符串 device-width | 定义 viewport 的宽度 |
| height | 一个正整数，或者字符串 device-height | 定义 viewport 的高度, 一般不会设置 |
| initial-scale | 一个 0.0 和 10.0 之间的正数 | 定义设备宽度和 viewport 的缩放比例 |
| maximum-scale | 一个 0.0 和 10.0 之间的正数 | 定义缩放的最大值 |
| minimum-scale | 一个 0.0 和 10.0 之间的正数 | 定义缩放的最小值 |
| user-scalable | yes, 1 或者 no, 0 | 默认为 yes，如果设置为 no，将无法缩放当前页面，部分浏览器可能忽略此规则 |

下面给出一段比较可靠的设置理想视口的代码：

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"
/>
```

[^1]: [HTML+CSS 《移动端适配方案》](https://www.bilibili.com/video/BV1u841157Fh/?share_source=copy_web)
[^2]: layout viewport, visual viewport 和 ideal viewport 的概念来源于 ppk，他是一个在移动端浏览器贡献较大的程序员  