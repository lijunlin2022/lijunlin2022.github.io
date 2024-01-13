---
tags: ['requestAnimationFrame']
---

# requestAnimationFrame 实现平滑滚动

大家好，我俊霖。

最近接到一个修复通知，iOS 15.4 ~ 17，使用 CSS `scroll-behavior: smooth` 或 JavaScript 的  `behavior: 'smooth'` 可能导致 iOS App Crash。

我维护的 H5 有个锚定功能，是使用 `element.scrollIntoView({ behavior: 'smooth' })` 来实现锚定并且带上动画的。现在得换种方法实现锚定。

参考修复通知，我决定使用 `requestAnimationFrame` 来实现动画。

首先，我准备改用 `window.scrollTo()` 替换掉 `scrollIntoView` 实现锚定。

```js
const targetPosition = element.offsetTop;
window.scrollTo(0, targetPosition);
```

## requestAnimationFrame

下面这段代码的作用是：将页面平滑滚动到某个位置。它首先会获取当前滚动条的位置，然后计算目标位置和当前位置的距离，之后将这个距离分为若干个部分，每隔一段时间就滚动一部分，直到滚动到目标位置。

```js
const smoothScrollTo = (targetPosition, part) => {
  const startPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  const distance = targetPosition - startPosition;
  const step = Math.floor(distance / part);
  let currentPosition = startPosition;

  const t = setInterval(() => {
    if (Math.abs(targetPosition - currentPosition) > Math.abs(step)) {
      currentPosition += step;
      window.scrollTo(0, currentPosition);
    } else {
      clearInterval(t);
      window.scrollTo(0, targetPosition);
    }
  }, 60);
}
```

我对 `requestAnimationFrame` 的理解，大概就是把它当做了一个 `setInterval` 的替代品。

首先我用 `setInterval` 实现了一个锚定的滚动动画：

```js
const smoothScrollTo = (targetPosition, part) => {
  const startPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  const distance = targetPosition - startPosition;
  const step = Math.floor(distance / part);
  let currentPosition = startPosition;
  let animationFrameId = null;

  const animation = () => {
    if (Math.abs(targetPosition - currentPosition) > Math.abs(step)) {
      currentPosition += step;
      window.scrollTo(0, currentPosition);
      animationFrameId = window.requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, targetPosition);
      window.cancelAnimationFrame(animationFrameId);
    }
  };

  animation();
}
```
