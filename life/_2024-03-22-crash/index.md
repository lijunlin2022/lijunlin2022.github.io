# 故障

- 微信小程序出现故障，所有用户进入都会看到白屏。

为什么出现白屏：

- 接口全部挂掉了

为什么接口全部挂掉了：

- 微信小程序只有后台配置的域名，才能够正常发起请求；配置的域名被删掉了。

为什么域名被删掉了：

- 运维错把「代商家管理小程序」二维码当成「企业公众号关联微信小程序」二维码，扫码后微信小程序被托管了，自动删除了配置的域名

为什么没有及时发现：

- 及时发现了（首页没有配置告警）

为什么没有及时修复：

- 删除的域名有一百多个，要手动粘贴回去，粘贴的域名次数有限制。webview 域名甚至只能一个个手动输入。

整体感觉：

- C 端是一件很危险和出于意料的工作，需要小心谨慎、留好后路。

https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/domain-management/modifyJumpDomain.html