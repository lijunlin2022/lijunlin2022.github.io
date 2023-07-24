# 异步分包

截止 2022 年 3 月 3 日，小程序的体积限制如下：[^1]

> 整个小程序所有分包大小不超过 20M
> 单个分包/主包大小不能超过 2M

因此，作为小程序开发者，总有一天会面临小程序的体积问题。

开发者一般会将核心页面放在主包中，将非核心的页面放在分包中。但是随着业务的迭代，主包总会有超过 2M 的时候，这个时候就需要用到「分包异步化」了。

微信官方文档将「分包异步化」分为：「跨分包自定义组件引用」 和 「跨分包 JS 代码引用」 [^2]。根据我实际的开发经验，「跨分包自定义组件引用」更加常见实用，下面我将介绍简单介绍这种方法。

为了行文方便，我后文将使用了「跨分包自定义组件引用」这种方式的组件，称为「异步组件」。

## 给「异步组件」单独建一个分包

我创建了一个分包 `sub-async-components-package`，之后所有的异步组件，都存放到这个分包中。

- app.json

```json
{
  "pages": [
    "pages/index/index"
  ],
  "subPackages": [{
    "root": "sub-async-components-package",
    "pages": [
      "pages/index"
    ]
  }]
}
```

`sub-async-components-package` 的目录结构如下：

```
src
├─pages
└─sub-async-components-package
  └─async-components
    └─component-a
    └─component-b
    └─component-c
```

## 在主包页面中引入异步组件

完成第一步之后，我们可以在主包的页面中，以如下方式引入异步组件。异步组件的传参，和普通组件一致。

```json
{
  "usingComponents": {
    "async-component-a": "/sub-async-components-package/async-components/component-a/index",
    "async-component-b": "/sub-async-components-package/async-components/component-b/index",
    "async-component-c": "/sub-async-components-package/async-components/component-c/index",
  },
  "componentPlaceholder": {
    "async-component-a": "view",
    "async-component-b": "view",
    "async-component-c": "view"
  }
}
```

```html
<async-component-a></async-component-a>
<async-component-b></async-component-b>
<async-component-c></async-component-c>
```

现在我们简单一下上述配置的意思。`componentPlaceholder` 顾名思义就是组件占位符的意思。在分包还没有加载完成之前，页面会用 `view` 标签暂时替代 `async-component-x` 标签，等到分包加载完成之后，再将 `view` 标签占据的位置还给 `async-component-x`。

[^1]: [分包加载 | 微信开放文档](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages.html)
[^2]: [分包异步化 | 微信开放文档](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/async.html)
