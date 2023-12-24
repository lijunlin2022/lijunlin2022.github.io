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

## 方法和接收者

go 语言中的方法 (Method) 是一种作用于特定变量类型的函数。这种特定类型变量叫做接收者（Receiver），接收者的概念就类似于其他语言中的 this 或者 self。

方法定义格式如下：

```go
func (vname vtype) func_name(parameter_list) [return_types] {
  func_body
}
```

方法的定义方式和函数的定义方法，只是将 `(vname vtype)` 和 `func_name(parameter_list)` 做一个调换。其中:

- vname 是接收者变量，他在命名时官方建议使用 vtype 的第一个小写字母，而不是 self 和 this 之类的变量名。例如，Person 类型的接收者变量应该命名为 p，Connector 类型的接收者变量应该命名为 c 等。
- vtpe 是接收者类型，可以是指针类型和非指针类型。
- func_name, paramter_list 和 return_types 具体格式与函数相同。

```go
type Person struct {
  name string
  age  int
}

func (p Person) Intro() {
  fmt.Printf("我的名字是%s, 今年%d岁\n", p.name, p.age)
}

func main() {
  man := Person{"小明", 20}
  man.Intro()
}
```

## 其余的初始化方法

### new 操作符

可以使用 `new` 来初始化结构体，此时结构体内部属性的值默认为该属性的零值。

```go
type Person struct {
  name string
  age  int
}

func (p Person) Intro() {
  fmt.Printf("我的名字是%s, 今年%d岁\n", p.name, p.age)
}

func main() {
  man := new(Person)
  man.Intro() // 我的名字是, 今年0岁
  man.name = "小明"
  man.age = 20
  man.Intro() // 我的名字是小明, 今年20岁
}
```

### & 取结构体的地址实例化

使用 & 对结构体取地址，相当于对该结构体类型进行了一次 new 实例化操作。

```go
type Person struct {
  name string
  age  int
}

func (p Person) Intro() {
  fmt.Printf("我的名字是%s, 今年%d岁\n", p.name, p.age)
}

func main() {
  man := &Person{"小明", 20}
  man.Intro() // 我的名字是小明, 今年20岁
}
```

## 不同初始化方法的区别

我们看到，`Person{}`、`new(Person)` 和 `&Person{}` 都可以初始化结构体，那么它们有什么区别呢？

`man = Person{}` 这种方式，man 是一个变量，它是 Person 的实例。当你修改 man 的字段时，你是在修改实例的字段，和 Person 本身无关。

`man = new(Person)` 和 `&Person{}` 这种方式，man 是一个指针。它是 Person 的指针。当你修改 man 的字段时，所有指向 Person 的指针的字段都会改变。

```go
type Person struct {
  name string
  age  int
}

func (p Person) Intro() {
  fmt.Printf("我的名字是%s, 今年%d岁\n", p.name, p.age)
}

func main() {
  p1 := Person{"小明", 20}
  p2 := &Person{"小刚", 20}
  p3 := new(Person)
  p3.name = "小华"
  p3.age = 20

  man1, man2 := p1, p1
  man1.age = 30
  man1.Intro() // 我的名字是小明, 今年30岁
  man2.Intro() // 我的名字是小明, 今年20岁

  man3, man4 := p2, p2
  man3.age = 30
  man3.Intro() // 我的名字是小刚, 今年30岁
  man4.Intro() // 我的名字是小刚, 今年30岁

  man5, man6 := p3, p3
  man5.age = 40
  man5.Intro() // 我的名字是小华, 今年40岁
  man6.Intro() // 我的名字是小华, 今年40岁
}
```

## 方法参数用变量还是指针？

在 go 语言中，如果一个方法不会修改结构体内部的值，那么从结果上看，无论参数是变量还是指针，都不会有影响。

```go
type Person struct {
  name string
  age  int
}

func (p Person) Intro() {
  fmt.Printf("我的名字是%s, 今年%d岁\n", p.name, p.age)
}

func (p *Person) IntroWithPtr() {
  fmt.Printf("我的名字是%s, 今年%d岁\n", p.name, p.age)
}

func main() {
  p1 := Person{"小明", 20}
  p1.Intro()        // 我的名字是小明, 今年20岁
  p1.IntroWithPtr() // 我的名字是小明, 今年20岁
}
```

但是从性能、内存分配和可读性考虑，一般我们还是会注意区分参数是变量还是指针。一般以下情况我们会考虑使用指针：

1. 需要修改接收器中的值。
2. 结构体比较大的时候。如果结构体非常大，那么将其作为值类型传递会消耗更多的内存和 CPU，因为 go 需要复制整个结构体。在这种情况下，使用指针类型可以提高性能，因为指针只需要存储一个内存地址。
3. 希望保持一致性的时候。如果你的某些方法需要修改结构体的值（因此需要使用指针），那么为了保持一致性，你可能会希望所有的方法都使用指针，即使有些方法并不需要修改结构体的值

## 构造函数

go 语言中没有原生的构造函数，我们可以自己写一个。这里考虑到性能，我们使用的是指针。

```go
type Person struct {
  name string
  age  int
}

func newPerson(name string, age int) *Person {
  return &Person{
    name,
    age,
  }
}

func (p *Person) Intro() {
  fmt.Printf("我的名字是%s, 今年%d岁\n", p.name, p.age)
}

func main() {
  p1 := newPerson("小明", 20)
  p1.Intro() // 我的名字是小明, 今年20岁
}
```

## 私有变量、公有变量、私有方法和公有方法

在 go 语言中，变量的公有或私有取决于其名称的首字母是否大写。

- 如果变量、函数、类型等名称首字母大写，那么它就是公有的，也就是说，它可以被其他包访问。
- 如果名称首字母小写，那么它就是私有的，只能在当前包内部访问，不能被其他包访问。
