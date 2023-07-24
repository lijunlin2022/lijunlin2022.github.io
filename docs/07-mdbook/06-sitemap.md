# sitemap

如果我们能够给搜索引擎提供 [sitemap.xml](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=zh-cn)，那么它抓取 mdbook 生成的网站就会更加快速。

目前 mdbook 没有提供生成 sitemap.xml 的插件，但是我们可以使用 node.js 的插件。

这里我选中了一款插件，名叫 [static-sitemap-cli](https://github.com/zerodevx/static-sitemap-cli)。

我们只需要简单的两个步骤，就可以生成自己的 sitemap.xml。

（1）安装 static-sitemap-cli

```
npm install static-sitemap-cli
```

（2）生成站点地图到 book 文件夹下

```
npx sscli --base https://lijunlin2022.github.io/blog/ -r book
```

这样便完成了。

不过，我的最终目的是，每当我有新博客提交时，都会自动更新 sitemap.xml 并部署，因此我需要改造一下原有的 yml 文件。

具体可以参考 [https://github.com/lijunlin2022/blog/blob/main/.github/workflows/mdbook.yml](https://github.com/lijunlin2022/blog/blob/main/.github/workflows/mdbook.yml)。

以我的博客为例，访问 [https://lijunlin2022.github.io/blog/sitemap.xml](https://lijunlin2022.github.io/blog/sitemap.xml) 便可以看到 sitemap.xml 文件了。