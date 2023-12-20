# 结构体

结构体是由一系列数据构成的数据集合。

```go
type Book struct {
  title  string
  author string
}

func main() {
  book1 := Book{"骆驼祥子", "老舍"}
  book2 := Book{title: "黄金时代", author: "王小波"}
  fmt.Println(book1)
  fmt.Println(book2)
}
```

结构体作为参数传递给函数，go 语言中的结构体是值类型，因此在将结构体传递给函数时，实际上是传递结构体的副本。

```go
func changeBook(b Book) Book {
  b.title = "狂人日记"
  b.author = "鲁迅"
  return b
}

func main() {
  book := Book{"骆驼祥子", "老舍"}

  newBook := changeBook(book)

  fmt.Println(book)    // {骆驼祥子 老舍}
  fmt.Println(newBook) // {狂人日记 鲁迅}
}
```

```go
func changeBookWithPtr(ptr *Book) Book {
  ptr.title = "狂人日记"
  ptr.author = "鲁迅"
  return *ptr
}

func main() {
  book := Book{"骆驼祥子", "老舍"}
  newBook := changeBookWithPtr(&book)
  fmt.Println(book)    // {狂人日记 鲁迅}
  fmt.Println(newBook) // {狂人日记 鲁迅}
}
```
