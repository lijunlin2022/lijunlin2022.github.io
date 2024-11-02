# 小程序 Webview 转 Skyline 过程总结

## 一、前置条件

app.json 中添加：

```json
{
  "lazyCodeLoading": "requiredComponents",
  "rendererOptions": {
    "skyline": {
      "defaultDisplayBlock": true,
      "defaultContentBox": true
    }
  }
}
```

## 二、挑选合适的页面

2、挑选页面，根据 skyline 支持的组件，挑选合适的页面。

https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/skyline/component.html

## 三、改页面的 JSON

3、选中页面后，改页面的 json

```json
{
  "navigationStyle": "custom",
  "componentFramework": "glass-easel",
  "renderer": "skyline",
  "disableScroll": true
}
```

- navigationStyle 改为 custom，因为 skyline 只支持自定义导航栏
- componentFramework 和 renderer 是官方文档要求添加的
- disableScroll 设置为 true，因为 skyline 禁止页面滚动，只能通过 scroll-view 包裹住元素后，由 scroll-view 进行滚动  

https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/skyline/migration/#%E5%BC%80%E5%A7%8B%E8%BF%81%E7%A7%BB

## 四、改造页面滚动

| 函数 | 改造方法 |
| -- | -- |
| onReachBottom | bindscrolltolower |
| onPullDownRefresh | bindrefresherrefresh |
| wx.pageScrollTo | ScrollViewContext.scrollTo |

参考：

- https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html
- https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/ScrollViewContext.scrollTo.html
