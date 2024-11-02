# 移动端适配 lib-flexible 和 postcss-pxtorem

最近看到，一般移动端适配会配合使用阿里的 [lib-flexible](https://github.com/amfe/lib-flexible) 和 [postcss-pxtorem](https://www.npmjs.com/package/postcss-pxtorem) 插件。

我们假设我们的手机屏幕和设计稿都是 750px 的。

使用 lib-flexible，会将 html 的 font-size 设置为屏幕宽度 `clientWidth` 的 1/10。也就是说 1rem = 75px;

这时候，如果设计稿上有一个元素 width 是 200px 的，为了让手机屏幕能够适配。我们需要写 CSS 的时候，直接将 width 写成 (200 / 75)rem。

当然，手动将 px 换算为 rem 还是对我们写代码还是很不友好。这时候就可以使用 postcss-pxtorem 了。我们将这个插件配置的 rootValue 写为 75px，这个插件会自动将我们的 css 从 px 换算为 rem。

```js title="postcss.config.js"
import pxtorem from 'postcss-pxtorem';

export default {
  plugins: [
    pxtorem({ rootValue: 75, propList: ['*'], selectorBlackList: ['html'] }),
  ],
};
```