# 404

我们可以给网站设置 404 页面，这样当用户访问到网站不存在的链接时，会跳转到 404 页面，提高用户的体验。

默认情况下，mdBook 只需要在 src 目录下添加 404.md，404 页面便会显示 404.md 的内容。

我们也可以通过修改 book.toml 中的配置，改变 404 页面的路径：

```toml
[output.html]
input-404 = "404.md"
```

除此之外，我们还需要设置 site-url，site-url 一般设置为网站的根路径，确保 404 页面也能正常获取脚本和样式文件。

```toml
[output.html]
site-url = "https://lijunlin2022.github.io/blog/"
```

可以参考我的博客网站 404 页面 [https://lijunlin2022.github.io/blog/not-found.html](https://lijunlin2022.github.io/blog/not-found.html)
