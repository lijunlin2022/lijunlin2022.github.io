# 宕机恢复  

recover 可以让进入宕机状态的 goruntine 恢复执行。

它仅在 defer 语句中有效，其他情况下调用 recover 返回 nil 并且没有其他影响。

通常来说，不应该对进入 panic 宕机的程序做任何处理，但有时，需要我们可以从宕机中恢复，至少我们可以在程序崩溃前，做一些操作，举个例子，当 web 服务器遇到不可预料的严重问题时，在崩溃前应该将所有的连接关闭，如果不做任何处理，会使得客户端一直处于等待状态，如果 web 服务器还在开发阶段，服务器甚至可以将异常信息反馈到客户端，帮助调试

panic 和 recover 的组合有如下特性：
- 有 panic 没 recover，程序宕机。
- 有 panic 也有 recover，程序不会宕机，执行完对应的 defer 后，从宕机点退出当前函数后继续执行。

```go
func ProtectRun(entry func()) {
  defer func() {
    err := recover()
    fmt.Println("error:", err)
  }()
  entry()
}

func main() {
  fmt.Println("运行前")
  // 故意造成空指针访问错误
  ProtectRun(func() {
    fmt.Println("赋值宕机前")
    var a *int
    *a = 1
    fmt.Println("赋值宕机后")
  })
  fmt.Println("运行后")
}
```

上述函数打印结果为：

```
运行前
赋值宕机前
error: runtime error: invalid memory address or nil pointer dereference  
运行后
```

也就是说，go 函数宕机后，退出了 ProtectRun() 并继续执行。
