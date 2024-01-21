# 宕机

宕机就是程序停止运行，服务中断，通常来说是严重的错误。

一般 go 语言宕机时，会立刻执行在 goroutine（可以先理解为线程）中被延迟的函数（defer 机制），随后程序会立刻输出日志信息，包括 panic value 和函数调用的堆栈跟踪信息。

## 手动触发宕机

go 语言中，我们可以直接用 `panic()` 触发宕机。

```go
func main() {
  fmt.Println(1)
  v := 1
  if v > 0 {
    panic("carsh")
  }
  fmt.Println(2)
}
```

go 语言会输出如下报错信息：

```
goroutine 1 [running]:
main.main()
        E:/learn-go/main.go:11 +0x5f
exit status 2
```

## 在宕机时触发延迟执行语句

```go
func main() {
  fmt.Println(1)
  defer fmt.Println(3)
  panic("carsh")
  defer fmt.Println(2)
}
```

carsh 之前的 defer 语句会在宕机之前执行，crash 之后的 defer 语句不会执行。
