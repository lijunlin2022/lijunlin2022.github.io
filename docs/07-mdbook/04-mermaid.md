# mermaid

mdbook 默认并不支持使用 mermaid 画图。我们可以通过安装插件的方式，让 mdbook 支持这个功能。

（1）安装 mdbook-mermaid

```
cargo install mdbook-mermaid
```

（2）在 book.toml 中可以添加如下配置。

```toml
[preprocessor.mermaid]
command = "mdbook-mermaid"

[output.html]
additional-js = ["assets/mermaid.min.js", "assets/mermaid-init.js"]
```

[mdbook-mermaid](https://github.com/badboy/mdbook-mermaid) 是一个开源插件。

（3）拷贝 mermaid 到与 src 同级的 assets 文件夹中。

mermaid-init.js 用来初始化 mermaid，内容为：

```js
mermaid.initialize({ startOnLoad: true });
```

至于 mermaid.min.js，可以去 [mermaid 官网](https://mermaid.js.org/)，找到它的 [CDN 地址](https://cdn.jsdelivr.net/npm/mermaid@10.2.0/dist/mermaid.min.js) 拷贝。

之后重新运行 `mdbook serve` 命令，就可以看到 mdbook 已经支持 mermaid 画图功能了。

(4) 更新部署脚本

如果你和我一样，使用的是 GitHub Pages 部署博客，那么你需要更改 yml。

```yml
jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    env:
      MDBOOK_VERSION: 0.4.21
    steps:
      - uses: actions/checkout@v3
      - name: Install mdBook
        run: |
          curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf -y | sh
          rustup update
          cargo install --version ${MDBOOK_VERSION} mdbook
          cargo install mdbook-mermaid
```