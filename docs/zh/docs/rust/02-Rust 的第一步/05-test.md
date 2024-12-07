## assert_eq!

Rust 有一个 `assert_eq!` [^1] 的辅助宏，可以辅助我们测试。

以 LeetCode 中的 Defanging an IP Address [^2] 题目为例，我们给需要提交的代码编写两个测试用例：

```rust
fn defang_i_paddr(address: String) -> String {
    address.replace(".", "[.]")
}

#[cfg(test)]
mod tests {

    use super::*;

    #[test]
    fn test_defang_i_paddr() {
        assert_eq!("1[.]1[.]1[.]1", defang_i_paddr(String::from("1.1.1.1")));

        assert_eq!("255[.]100[.]50[.]0", defang_i_paddr(String::from("255.100.50.0")));
    }
}
```

## 参考资料

[^1]: [Unit testing | Rust](https://rustwiki.org/en/rust-by-example/testing/unit_testing.html)
[^2]: [Defanging an IP Address | LeetCode](https://leetcode.com/problems/defanging-an-ip-address/)

<script
  src="https://utteranc.es/client.js"
  repo="lijunlin2022/blog-issues"
  issue-term="rust-test"
  theme="github-light"
  crossorigin="anonymous"
  async
>
</script>
