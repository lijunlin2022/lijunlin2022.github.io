# H5、小程序把商品添加到购物车的抛物线动画如何实现

电商 H5、小程序把商品添加到购物车时，常常会有一个抛物线动画——商品的缩略图从卡片上出现，又掉落到购物车中。比如麦当劳小程序就实现了这个功能，这个效果该如何做呢？

![](./img/mcdonald's.gif)

如果你也想实现这个动画，看完这篇文章，你一定有所收获。我会先说明抛物线动画的原理，再解释抛物线动画实现的关键代码，最后给出完整的代码示例。代码效果如下：

![](./img/parabola.gif)

## 抛物线动画的原理

高中物理告诉我们，抛体运动可以分解为水平方向的匀速直线运动、还有竖直方向自由落体运动。

![](./img/principle.png)

实现这个抛物线动画时，我们也可以把动画拆解为水平动画和竖直动画。

- 水平的匀速直线运动，动画函数非常好实现，就是 `linear`。
- 竖直的自由落体运动，严格的动画函数不好实现，我们可以用一个近似函数来代替。因为自由落体运动速度是越来越快的，所以我们可以用一个先慢后快的贝塞尔曲线来替代，张鑫旭大佬提供了一个函数 `cubic-bezier(0.55, 0, 0.85, 0.36);`[^1]

## 关键代码实现

```css
.ball-box {
  /* ... */
  animation: moveX 1s linear infinite;
}

.ball {
  /* ... */
  animation: moveY 1s cubic-bezier(0.55, 0, 0.85, 0.36) infinite;
}

@keyframes moveX {
  to {
    transform: translateX(-250px);
  }
}

@keyframes moveY {
  to {
    transform: translateY(250px);
  }
}
```

## 代码示例

代码示例如下：

[抛物线动画 | codepen](https://codepen.io/lijunlin2022/pen/NWoLgyV)

## 总结

本文我们介绍了抛物线动画的实现方法，我们可以将抛物线动画拆分为水平动画和竖直动画，水平动画中匀速运动我们可以使用 linear 来实现，竖直动画中的自由落体运动我们可以使用一个先慢后快的贝塞尔曲线来替代。

[^1]: [这回试试使用CSS实现抛物线运动效果 | 张鑫旭](https://www.zhangxinxu.com/wordpress/2018/08/css-css3-%e6%8a%9b%e7%89%a9%e7%ba%bf%e5%8a%a8%e7%94%bb/)
