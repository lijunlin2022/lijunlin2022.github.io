# 条件、循环语句

## 条件语句

- if 不需要用括号包围
- switch 默认情况下 case 最后自带 break 语句，匹配成功后就不会执行其他 case，如果我们需要执行后面的 case，可以使用 fallthrough

## 循环语句

- for 不需要用括号包围
- go 语言没有 while 和 do while，全部都是用 for 来解释
- go 语言可以利用 for 循环遍历数组、Map 等

```go
func usingFor() {
  sum := 0
  for i := 0; i <= 10; i++ {
    sum += i
  }
  fmt.Printf("%d\n", sum)
}
```

```go
// 下面的写法类似 while
func usingFor() {
  sum := 1
  for sum <= 10 {
    sum += 1
  }
  fmt.Printf("%d\n", sum)
}
```

```go
// 死循环的写法
func usingFor() {
  for {
    fmt.Println("hello!")
  }
}
```

```go
// 遍历字符串、数组和 Map
func usingFor() {
  strs := []string{"hello", "world"}
  for index, str := range strs {
    fmt.Printf("index: %d, str: %s\n", index, str)
  }

  nums := [3]int{0, 1}
  for index, num := range nums {
    fmt.Printf("index: %d, num: %d\n", index, num)
  }

  tempMap := make(map[string]string)
  tempMap["js"] = "JavaScript"
  tempMap["go"] = "golang"

  for key, value := range tempMap {
    fmt.Printf("key: %s, value: %s\n", key, value)
  }
}
```

## goto 语句

```go
func usingGoTo() {
  var num int
  fmt.Println("请输入一个数字")
  fmt.Scan(&num)
  switch num {
  case 0:
    goto END
  case 1:
    fmt.Println("输入数字 1")
  case 2:
    fmt.Println("输入数字 2")
  default:
    fmt.Println("进入了 default")
  }
  fmt.Println("以上是 switch 的内容")
END:
  fmt.Println("结束啦")
}
```
