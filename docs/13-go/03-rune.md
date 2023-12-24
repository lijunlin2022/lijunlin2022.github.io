# rune

在介绍 rune 之前，我们先看一段运行的结果。

```go
func main() {
  str := "go语言"
  fmt.Println(len(str)) // 8
}
```

这是为什么呢？我们知道，字符底层是由字节序列构成的，在 go 语言底层，英文只占了 1 字节，而中文则占了 3 字节，所以长度就是 `1 * 2 + 3 * 2 = 8`。

## 定义

go 语言中有两种定义方式，一种是「类型定义声明」，比如 int string 等；另外一种是「类型别名声明」，`rune` 和 `byte` 就是 go 语言原生的两个类型别名，专门用来处理字符。

go 语言把字符分为 byte 和 rune 两种类型处理。byte 是类型 uint8 的别名，用于存放占 1 字节的 ASCII 码。rune 是类型 int32 的别名，用于存放多字节的字符，比如 3 字节的中文符号。

```go
func main() {
  str := "go语言"

  fmt.Println([]byte(str)) // [103 111 232 175 173 232 168 128]
  fmt.Println([]rune(str)) // [103 111 35821 35328]
}
```

![](http://www.17bigdata.com/study/static.codebaoku.com/pics/90/3f/903f8934ecdb0afda388a617c0e6b4a7.jpg)

现在我们再回看文章开始时的问题，我们可以这样解决？

```go
func main() {
  str := "go语言"
  fmt.Println(utf8.RuneCountInString(str)) // 4
}
```
