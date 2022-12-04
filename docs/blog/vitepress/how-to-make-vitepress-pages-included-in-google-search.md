# 如何让 VitePress 被 Google 搜索收录

我们使用 VitePress 生成并部署静态页面后，往往会希望 Google 能够收录我们的网站，以便推送给更多的人。

收录的过程非常简单，只需要两个步骤：提交网站链接和验证网页链接。

## 1. 提交网页链接

以我的网站 https://lijunlin2022.github.io 为例：

首先在 Google 搜索中输入 `site:https://lijunlin2022.github.io`，查看网站是否已经被 Google 收录。

如果没有被收录，会出现一个 `尝试使用 Google Search Console` 的链接，点击进入。

进入网页后，会出现弹窗让你提交网页链接。

通常我们选择 `URL prefix` 方法，然后把网页链接直接粘贴进去，点击 Continue 按钮。

## 2. 验证网页链接

接下来进入 Verify ownership 阶段，也就是验证你是刚才提交的网页链接的所有者。

通常我们会选择 `HTML tag` 的验证方式，也就是在 HTML 的 head 标签中增加一个 Google 的 meta 标签。

根据 VitePress 的 [frontmatter-configs](https://vitepress.vuejs.org/config/frontmatter-configs) 中，我们可以通过在 docs/index.md 中使用 yaml 语法。这样当 Markdown 编译为 HTML 时，就能生成特定的 meta 标签了。

语法如下：

```yaml
---
head:
  - - meta
    - name: 'google-site-verification'
    - content: '你自己的验证码'
---
```

生成的 HTML 如下：

```html
<meta name="google-site-verification" content="你自己的验证码" />
```

将 VitePress 成功部署后，在 Google 上点击确认就可以了。