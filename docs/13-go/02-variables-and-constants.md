# 变量和常量

## 变量

和其他语言不同，go 语言声明变量时，跟随在 var 后面的首先是变量名，然后是变量类型。

```go
var vname vtype
vname = "hello"
```

```go
var vname1, vname2 vtype
vname1, vname2 = "hello", "world"
```

go 变量如果没有初始化，那么默认会设置一些值。

- 数值类型（包括 complex64/128）为 0
- 布尔类型为 false
- 字符串为 ""（空字符串）
- 以下几种类型为 nil

```go
var a *int
var a []int
var a map[string] int
var a func(string) int
var a error // error 是接口
```

go 语言可以根据值自信判断变量类型。

```go
var vname = vale
var vname1, vname2 = "hello", "world"
```

声明和变量都可以缩写

```go
intVal := 1
strVal1, strVal2 := "hello", "world"
```

上述代码和下方写法等价：

```go
var intVal int
intVal = 1

var strVal1, strVal2 string
str1Val1, strVal2 = "hello", "world"
```

还有一种写法，通常适用于定义全局变量。

```go
var (
  vname1 vtype1
  vname2 vtype2
)
```

## 常量

常量的语法和上述变量的语法基本一致。但是有一些特殊的地方。

1. 和其他语言不同，go 的常量一般不会全大写。
2. go 没有单独的枚举类型，一般会直接使用常量来做枚举。

```go
const (
  Unknown = 0
  Female = 1
  Male = 2
)
```

3. 有一个 iota 的特殊常量，能够赋值给常量。他可以作为是 const 语句块的自增下标。

```go
const (
  a = iota
  b
  c
)
```

上述代码等价于：

```go
const (
  a = 0
  b = 1
  c = 2
)
```
