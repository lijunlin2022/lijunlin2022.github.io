
# 函数

```
func func_name ([parameter_list]) [return_types] {
  函数体
}
```

函数定义解析：

- func：函数声明
- function_name：函数名称
- parameter_list：参数列表，数列表指定的是参数类型、顺序、及参数个数。函数也可以不包含参数。
- return_types：返回类型，函数返回一列值。return_types 是该列值的数据类型。有些功能不需要返回值，这种情况下 return_types 不是必须的。
- 函数体：函数定义的代码集合。

go 语言的函数参数传递方式是值传递。这意味着当你将一个变量传递给函数时，函数会接收到这个变量的一个副本，而不是原始变量的引用。因此，如果你在函数内部改变了这个副本的值，原始变量的值不会改变。

然而，go 语言的切片（slice）、映射（map）和通道（channel）等类型的变量，虽然在传递给函数时也是值传递，但是它们的值其实是一个指向底层数据结构的指针。因此，如果你在函数内部改变了这些类型的变量，那么原始变量所指向的底层数据结构的值也会改变。这种情况下，虽然严格来说仍然是值传递，但是它的行为看起来更像是引用传递。

```go
func max(num1, num2 int) int {
  if num1 > num2 {
    return num1
  } else {
    return num2
  }
}
```

```go
// 有多个返回值的函数
func swap(str1 string, str2 string) (string, string) {
  return str2, str1
}

func main() {
  str1 := "hello"
  str2 := "world"
  newStr1, newStr2 := swap(str1, str2)
  fmt.Println(newStr1, newStr2)
}
```

## 函数作为参数

```go
func getSquareRoot(num float64) float64 {
  return math.Sqrt(num)
}

func main() {
  fmt.Println(getSquareRoot(9))
}
```

## 函数作为返回值

函数作为返回值时，有一种特殊情况称之为「闭包」。如果一个函数返回另一个函数，并且这个返回的函数引用了外部函数的变量，那么这个函数就可以被认为是一个闭包。

```js
func getSequence() func() int {
  num := 0
  return func() int {
    num += 1
    return num
  }
}

func main() {
  firstFunc := getSequence()

  fmt.Println(firstFunc()) // 1
  fmt.Println(firstFunc()) // 2
  fmt.Println(firstFunc()) // 3

  secondFunc := getSequence()

  fmt.Println(secondFunc()) // 1
  fmt.Println(secondFunc()) // 2
}
```

## 匿名函数

go 的匿名函数类似于 js 的箭头函数，可以直接在函数体里定义，并赋值给一个变量。

```go
func main() {
  add := func(a, b int) int {
    return a + b
  }

  diff := func(a, b int) int {
    return a - b
  }

  mul := func(a, b int) int {
    return a * b
  }

  div := func(a, b float64) float64 {
    return a / b
  }

  fmt.Printf("1 + 2 = %d\n", add(1, 2))
  fmt.Printf("1 - 2 = %d\n", diff(1, 2))
  fmt.Printf("1 * 2 = %d\n", mul(1, 2))
  fmt.Printf("1 / 2 = %f\n", div(1, 2))
}
```
