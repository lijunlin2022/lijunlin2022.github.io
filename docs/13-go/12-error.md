# 错误

## 错误处理

一般如果 go 语言的函数可能发生错误，那么它会有两个返回值，第一个返回值是正常返回值，第二个返回值就是错误。

如果发生错误时，第二个返回值不再时 `nil`，而是一个错误类型的数据，需要我们加以处理。

比如打开文件时，文件可能打开失败。

```go
func main() {
  f, err := os.OpenFile("./song.txt", os.O_WRONLY|os.O_CREATE, 0666)
  if err != nil {
    fmt.Println("文件打开失败")
    return
  }
  defer f.Close()
}
```

## 自定义错误

如果编写一个函数，函数内部可能发生错误，你最好让函数的返回值中也包含错误。为此，你需要用到 `errors.New()` 来创建错误。

比如创建一个除法函数，你需要考虑除数为 0 时发生错误的情况。

```go
var errDivByZero = errors.New("除数不能为 0")

func div(dividend, divisor int) (int, error) {
  if divisor == 0 {
    return 0, errDivByZero
  }

  return dividend / divisor, nil
}

func main() {
  res, err := div(1, 0)
  if err != nil {
    fmt.Println(err) // 除数不能为 0
    return
  }
  fmt.Println(res)
}
```

## 自定义信息更丰富的错误

使用 `errors.New()` 创建的字符串信息，无法携带更多信息。但很多时候，为了方便排查报错，你可以自定义结构体实现错误接口。

比如创建一个解析文件错误，你需要告诉用户出错的文件名和行号。

```go
type ParseError struct {
  Filename string
  Line     int
}

func (e *ParseError) Error() string {
  return fmt.Sprintf("%s:%d", e.Filename, e.Line)
}

func newParserError(filename string, line int) error {
  return &ParseError{filename, line}
}

func main() {
  e := newParserError("song.txt", 1)

  // 通过 error 接口查看错误描述
  fmt.Println(e.Error())

  // 根据接口具体的类型，获取详细错误信息

  switch detail := e.(type) {
  case *ParseError:
    fmt.Printf("Filename: %s Line: %d\n", detail.Filename, detail.Line)
  default:
    fmt.Println("other error")
  }
}
```
