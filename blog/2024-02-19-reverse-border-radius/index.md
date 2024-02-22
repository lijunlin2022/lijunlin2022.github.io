---
tags: ['H5', '小程序']
---

# H5、小程序反向圆角、反向圆角的边框如何实现

H5、小程序中正向圆角很常见，但偶尔也能看到新颖的反向圆角。

比如热风小程序（一个卖鞋的小程序）中，为了宣传新鞋，鞋子图片就不是正向圆角，而是反向圆角。

![](./img/hotwind.jpg)

这种反向圆角、阴影应该如何实现呢？下面我会介绍反向圆角、阴影的实现原理，并给出示例代码。最后，我会给做一个简单的总结。

## 反向圆角的原理

不难想到，反向圆角可以看作一个长方形被圆形遮挡了四个边角。

![](./img/rectangle-and-circle.png)

至于反向圆角的边框，可以看作整个是反向圆角图形的投影。

![](./img/shadow.png)

## 关键代码实现

知道圆遮挡长方形的原理后，我们最容易想到的办法是 —— 先用 50% 的 border-radius 得到圆，再改变圆形的定位去遮挡矩形。

不过这种方法需要多个元素，并不优雅，我将介绍另一种更巧妙的办法。

我们需要先了解一个 CSS 函数 —— [radial-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/radial-gradient)。`radial-gradient` 中文名称是径向渐变，它可以指定渐变的中心、形状、颜色和结束位置。语法如下：

```css
/*
 * 形状 at 位置
 * 渐变颜色 渐变位置
 * ...
 * 渐变颜色 渐变位置
 */
background-image:
  radial-gradient(
    circle at center,
    transparent 0,
    transparent 20px,
    #ddd 0
  );
```

### 长方形中央画一个圆

光看语法比较抽象，我们用代码写一个实际的例子。如图所示，我们要写一个长方形，中央有一个圆的效果。

![](./img/circle-at-center.png)

下面是利用 radial-gradient 的代码：

```html
<div class="circle-in-rect"></div>
```

```css
.circle-in-rect {
  width: 200px;
  height: 150px;
  margin: 25px;
  background: 
    radial-gradient(
      circle at center,
      transparent 0,
      transparent 20px,
      #ddd 20px
    );
}
```

其中：

- `radial-gradient()` 函数用于创建渐变效果。
- `circle at center` 指定了圆形渐变，并且渐变的中心在长方形的中心。
- `transparent 0` 指定了第一个渐变颜色为透明，位置是从中心开始。
- `transparent 20px` 指定了第二个渐变颜色也为透明，位置距离中心 20px。
- `#ddd 20px` 指定了第三个渐变颜色为淡灰色，位置距离中心 20px，第三个渐变颜色之后的颜色都是淡灰色。

通过 radial-gradient，我们成功让长方形中心、半径为 20px 的圆渐变颜色都变为透明，超过半径 20px 的地方颜色都变为灰色，这样看起来就是长方形中心有一个圆。

### 长方形左上角画一个圆

不难想到，只要我们把圆的中心从长方形中心移动到长方形的左上角，就可以让圆挡住长方形左上角，得到一个反向圆角。

![](./img/single.png)

关键代码如下，我们可以把 `circle at center` 改写为 `circle at left top`，这样圆的中心可以移动到长方形左上角了：

```css
.single {
  background:
    radial-gradient(
      circle at left top,
      transparent 25px,
      #ddd 0
    );
}
```

### 长方形四个角画四个圆

我们已经知道 radial-gradient 如何实现 1 个反向圆角，接下来再看如何实现 4 个反向圆角。继续之前的思路，我们很容易想到给 background 设置多个反向渐变。

CSS 可以给 background 设置多个渐变（包括线性渐变和径向渐变），多个渐变之间可以用逗号分隔、且它们会按照声明的顺序依次堆叠。

自然而然地，我们会写出如下代码：

```css
  background: 
    radial-gradient(
      circle at left top,
      transparent 25px,
      #ddd 25px
    ),
    radial-gradient(
      circle at right top,
      transparent 25px,
      #ddd 25px
    ),
    radial-gradient(
      circle at left bottom,
      transparent 25px,
      #ddd 25px
    ),
    radial-gradient(
      circle at right bottom,
      transparent 25px,
      #ddd 25px
    );
```

遗憾的是，上述代码我们看不到四个反向圆角，而是看到一个矩形。

![](./img/rect.png)


这是因为四个矩形互相堆叠，反而把反向圆角给遮住了。

![](./img/four-rect.png)

我们还需要设置其他细节。这里为了区分四个径向渐变，我给四个区域设置了红、绿、蓝、黄四种颜色：

![](./img/four.png)

我们需要添加的细节如下：

- `background-size: 50% 50%;` 设置背景图像的大小为容器的宽度和高度的 50%，以确保每个渐变都覆盖了容器的一半区域。
- `background-repeat: no-repeat;` 让背景不重复。
- `background: ...;` 定义了背景，并在径向渐变函数后增加 `left top` 等指示位置的关键字。四个径向渐变，分别放置在容器的四个角落，是红、绿、蓝、黄四种颜色。

```css
background-repeat: no-repeat;
background-size: 50% 50%;
background: 
  radial-gradient(circle at left top, transparent 25px, red 25px)
  left top,
  radial-gradient(circle at right top, transparent 25px, green 25px)
  right top,
  radial-gradient(circle at left bottom, transparent 25px, blue 25px)
  left bottom,
  radial-gradient(circle at right bottom, transparent 25px, yellow 25px)
  right bottom;
```

现在我们来逐个解释 3 个细节的作用。

### 反向圆角的边框


接下来我们看如何给反向圆角设置边框，我们可以利用 [drop-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter-function/drop-shadow) 函数。

drop-shadow 可以创建一个符合元素形状的投影，它的语法如下：

```css
/*
 * x 偏移量
 * y 偏移量
 * 阴影模糊半径
 * 阴影颜色
 */
filter:
  drop-shadow(
    0
    0
    2px
    red
  );
```

设置一下 drop-shadow 的模糊半径和颜色，就可以实现边框效果。

![](./img/four-with-shadow.png)

## 代码示例

[反向圆角、阴影 | codepen](https://codepen.io/lijunlin2022/pen/GReBjEO)

## 总结

本文我们介绍了如何实现反向圆角、以及反向圆角的边框。

反向圆角可以用圆遮挡长方形实现。至于圆形，我们可以利用 radial-gradient（径向渐变）指定圆的圆心位置、渐变颜色位置实现。

要实现多个反向圆角，我们可以设置多个径向渐变。只是我们需要注意设置 background-size 和 background-repeat，不要让径向渐变互相遮挡。

最后，我们可以利用 drop-shadow 实现反向圆角的边框。
