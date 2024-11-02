# 整型

整数类型简称 `整型`，rust 中的整型分为有符号整型和无符号整型。

| 位长度 | 有符号 | 无符号 |
| -- | -- | -- |
| 8-bit | i8 | u8 |
| 16-bit | i16 | u16 |
| 32-bit | i32 | u32 |
| 64-bit | i64 | u64 |
| 128-bit | i128 | u128 |
| arch | isize | usize |

## 整型互相转换

`as` 操作符可以将让整型互相转换。

## 数字转字符串

我们可以直接使用 `to_string()` 方法将数字转换为字符串。

```rust
fn main() {
    let num: i32 = 12345;
    let num_string: String = num.to_string();
    println!("Number as string: {}", num_string);
}
```
