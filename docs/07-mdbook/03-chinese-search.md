# 中文搜索

mdBook 生成的文档和书记，默认只支持英文搜索，其实我们只需要几个简单的配置，就可以让 mdBook 生成的 HTML 支持中文搜索。

1. 新建一个和 src 同级的文件夹 assets。
2. 将 [fzf.umd.js](https://gist.github.com/lijunlin2022/1a9d90b078422192b51392c92e3a9dba) 和 [elasticlunr.js](https://gist.github.com/lijunlin2022/1a9d90b078422192b51392c92e3a9dba) 文件放到 assets 目录下。
3. 在 book.toml 的配置中添加配置

```
[output.html]
additional-js = ["assets/fzf.umd.js", "assets/elasticlunr.js"]
```