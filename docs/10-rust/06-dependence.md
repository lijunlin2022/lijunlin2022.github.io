# 添加依赖和移除依赖

- `cargo add regex` 添加 regex 依赖
- `cargo remove regex` 移除 regex 依赖

添加依赖后，Cargo.toml 的 [dependencies] 下方，会出现我们安装的依赖名称和版本号。

```toml
[package]
name = "learn-rust"
version = "0.1.0"
edition = "2021"

[dependencies]
regex = "1.7.3"
```
