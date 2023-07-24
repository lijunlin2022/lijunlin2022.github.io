# 动态数组 Vector

## 翻转数组 reverse

Rust 中，我们可以使用 `reverse()` 直接翻转数组。

```rust
fn main() {
    let s: String = String::from("Hello, world!");
    let mut chars: Vec<char> = s.chars().collect();
    chars.reverse();
    let reversed: String = chars.into_iter().collect();

    println!("{}", reversed);
}
```
