# 正则表达式

- `replace_all()` 可以替换掉所有正则表达式匹配到的字符。

```rust,ignore
use regex::Regex;

fn main() {
    let s: &str = "abcdefghijklmn";
    let re: Regex = Regex::new(r"\w").unwrap();
    let new_s: String = re.replace_all(s, "-").to_string();
    print!("{}", new_s);
}
```