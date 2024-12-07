# 字符串 String 和 &str

Rust 有 `String` 和 `&str` 两种字符串类型，其中，&str 是 String 的切片类型。也就是说，&str 是 String 的一部分。

String 是可变的（mutable），而 &str 是不可变的（immutable）

## String 和 &str 互相转换

- String 转 &str

我们可以使用 `&` 操作符，将 String 类型转换为 &str 类型。

```rust
let string: String = String::from("Hello World!");
let str: &str = &string;

println!("{}", str);
```

- &str 转 String

我们可以使用 `to_string()` 方法将 &str 类型转换为 String 类型。

```rust
let str: &str = "Hello World!";
let string: String = str.to_string();
println!("{}", string);
```

## String 和 char 互相转换

- String 转 char

我们可以使用 `chars()` 将 String 转换为 char 类型的数组。

```rust
fn main() {
    let s: String = String::from("hello");
    let char_vec: Vec<char> = s.chars().collect();

    println!("{:?}", char_vec);
}
```

如果我们想获得字符串中特定的字符，我们可以往 `nth()` 方法中传入索引。

其中，`unwrap_or('\0')` 的作用是，如果 nth() 没有查找到特定索引的字符，会返回一个 None，而使用 unwrap_or('\0') 时则会提供一个默认值 '\0'; [^1]

```rust
fn main() {
    let s: String = String::from("hello");
    let c: char = s.chars().nth(1).unwrap_or('\0');

    println!("{}", c);
}
```

- char 转 String

我们可以使用 `to_string()` 方法，将单个字符转换为字符串。

```rust
fn main() {
    let c: char = 'a';
    let s: String = c.to_string();
    println!("char to string: {}", s);
}
```

当出现多个字符时，我们可以将字符一个接一个 `push()` 到字符串中，这样便自动实现了字符到字符串的转换。

```rust
fn main() {
    let chars: Vec<char> = vec!['h', 'e', 'l', 'l', 'o'];
    let mut s: String = String::new();

    for c in chars {
      s.push(c);
    }

    println!("concatenated string: {}", s);
}
```

我们也可以先使用 `collect()` 方法，实现字符到字符串的转换。

```rust
fn main() {
    let chars: Vec<char> = vec!['h', 'e', 'l', 'l', 'o'];
    let s: String = chars.into_iter().collect();

    println!("concatenated string: {}", s);
}
```

## 比较 String 是否相等

在 Rust 中，我们可以直接使用 `==` 运算符，判断两个字符串是否相等。

```rust
fn main() {
    let s1 = String::from("Hello");
    let s2 = String::from("World");

    if s1 == s2 {
        println!("s1 and s2 are equal.");
    } else {
        println!("s1 and s2 are not equal.");
    }
}
```

## split_whitespace() 去除空白符号

在 Rust 中，我们可以通过 `split_whitespace()` 去除字符串中的 space，tab 和 newlines 等符号。

```rust
fn main() {
    let s: &str = "  h             el      l       o  ";
    let words: Vec<&str> = s.split_whitespace().collect();
    let result: String = words.join(" ");
    println!("{}", result);
}
```

## 拼接 &str 成为 String

rust 提供了很多方法来拼接字符串，每一种方法都有特定的使用情况。

- `format!()`，最简单直接的方法

```rust
fn main() {
    let world: &str = "world";
    let s: String = format!("Hello {}!", world);
    println!("{}", s);
}
```

- `push_str()`，追加字符串时，更适合使用的方法

```rust
fn main() {
    let world: &str = "world";
    let mut s: String = String::from("hello ");
    s.push_str(world);
    println!("{}", s);
}
```

- `concat()`，将字符串数组连接成一个字符串

```rust
fn main() {
    let strs: Vec<&str> = vec!["talk", " ", "is", " ", "cheap"];
    let s: String = strs.concat();
    println!("{}", s);
}
```

- `join()`，将字符串数组连接成一个字符串，连接符可以自己设置

```rust
fn main() {
    let strs: Vec<&str> = vec!["show", "me", "the", "code"];
    let s: String = strs.join(" ");
    println!("{}", s);
}
```

- `+`，运算符，需要两侧的字符串类型分别为 `&str` 和 `String`

```rust
fn main() {
    let s1: &str = "hello";
    let s2: &str = " world";
    println!("{}", s1.to_string() + s2);
}
```

## 标准字符串和原始字符串

在 Rust 中，字符串字面量（string iteral）有两种表示方式，标准字符串字面量（standard string iteral）和原始字符串字面量（raw string iteral）。

- 标准字符串

标准字符串使用 `""` 包含。在标准字符串中，`\` 有特殊含义，用于表示转义字符串。比如 `"hello\\world"` 打印后是 `hello\world`。

```rust
let s: &str = "hello\\world";
println!("{}", s);
```

- 原始字符串

原始字符串使用 `r#"..."#` 格式包含，其中 `#` 可以被替换为任何字符。原始字符串不支持转义字符。比如 `r#"hello\\world"#` 打印后是 `hello\\world`。

```rust
let s: &str = r#"hello\\world"#;
println!("{}", s);
```

原始字符串可以避免繁琐的反斜杠，让代码更清晰易懂。因此在表示正则表达式、文件路径时，我们通常会选择原始字符串字面量。

## 字符串和所有权

1. Rust 中的每一个值都有一个变量，称为其所有者；
2. 值在任一时刻有且只有一个所有者；
3. 当所有者（变量）离开作用域，这个值将被丢弃。

举例来说：下述代码将会报错，因为变量 `your_name` 离开作用域后，变量就销毁了。

如果把 `print_name_2` 和 `print_name_1` 调换位置，则能够正常运行，因为 `print_name_2` 借用了 `your_name` 的所有权，`your_name` 变量还存在。

```rust
use std::io::stdin;

fn what_is_your_name() -> String {
    let mut your_name = String::new();
    stdin().read_line(&mut your_name).expect("Failed to read line");
    your_name = your_name.trim().to_lowercase().to_string();
    your_name
}
fn print_name_1(name: &String) {
    println!("Hello, {}!", name);
}
fn print_name_2(name: String) {
    println!("Hello, {}!", name);
}
fn main() {
    let your_name = what_is_your_name();
    // 正常
    print_name_1(&your_name);
    print_name_2(your_name);
    // 报错
    // print_name_2(your_name);
    // print_name_1(&your_name);
}
```
