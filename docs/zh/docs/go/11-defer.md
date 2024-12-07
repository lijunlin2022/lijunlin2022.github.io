# defer

defer 是 go 语言的延迟执行语句。添加 defer 的语句，会被放到函数返回前处理。

```go
// 最终结果是 0 2 1
func main() {
  fmt.Println(0)
  defer fmt.Println(1)
  fmt.Println(2)
}
```

同样被 defer 的语句，先被 defer 的语句最后执行，最后被 defer 的语句最先执行，类似栈的执行顺序。

```go
func main() {
  defer fmt.Println(0)
  defer fmt.Println(1)
  fmt.Println(2)
}
```

defer 常用来处理业务逻辑中成对的操作，比如打开文件和关闭文件，接收请求和回复请求，加锁和解锁等等。

```go
func main() {
  f, err := os.OpenFile("./song.txt", os.O_WRONLY|os.O_CREATE, 0666)
  if err != nil {
    fmt.Println("文件打开失败")
    return
  }
  defer f.Close()

  str := "挪威的森林\n"

  // 写入时，使用带缓存的 *Writer
  writer := bufio.NewWriter(f)
  for i := 0; i < 3; i++ {
    writer.WriteString(str)
  }

  // 因为 writer 是带缓存的，因此在调用 WriterString 方法时，内容是先写入缓存的
  // 所以要调用 Flush方法，将缓存的数据真正写入到文件中
  writer.Flush()
}
```
