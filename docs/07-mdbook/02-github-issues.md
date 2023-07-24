# github issues

mdBook 本身并不支持评论，但我们可以使用 [utterances](https://utteranc.es/) 这个评论插件，很方便快捷地添加评论功能。

1. 在 GitHub 新建一个用于评论的仓库。比如我单独新建了一个 [blog-issues](https://github.com/lijunlin2022/blog-issues)
2. 访问 [utterances 的配置界面](https://github.com/apps/utterances) ，点击 `Configure`，然后选择用于评论的仓库。
3. 在 mdBook 的 Markdown 文件底部，加入一段 script 代码。我们只需要填写 `repo`（仓库名）和 `issue-term`（issue 分组，可以直接写文章名）。

```html
<script
  src="https://utteranc.es/client.js"
  repo="lijunlin2022/blog-issues"
  issue-term="mdbook-github-issues"
  theme="github-light"
  crossorigin="anonymous"
  async
>
</script>
```

<script
  src="https://utteranc.es/client.js"
  repo="lijunlin2022/blog-issues"
  issue-term="mdbook-github-issues"
  theme="github-light"
  crossorigin="anonymous"
  async
>
</script>
