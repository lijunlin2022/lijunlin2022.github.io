# 添加依赖和移除依赖

| 命令 | 解释 |
| -- | -- |
| cargo new | 新建项目 |
| cargo run | 运行项目 |
| cargo check | 检查项目是否可用 |
| cargo build | 编译但不运行项目 |
| cargo clean | 删除 target 目录 |
| cargo run --release | 发布模式下编译并运行 |
| cargo fmt | 修改项目格式 |
| cargo clippy | 得到修改建议 |
| cargo add | 添加依赖 |
| cargo remove | 移除依赖 |

添加依赖后，Cargo.toml 的 [dependencies] 下方，会出现你安装的依赖名称和版本号。

```toml
[package]
name = "learn-rust"
version = "0.1.0"
edition = "2021"

[dependencies]
regex = "1.7.3"
```
