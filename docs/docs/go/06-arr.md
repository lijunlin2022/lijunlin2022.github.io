# 数组

## 声明数组

```
var arrName [size]dataType
```

数组定义解析：

- arrName 是数组的名称
- size 是数组的大小
- dataType 是数组中元素的数据类型

## 初始化数组

**默认初始化**

```go
func main() {
  var numArr [3]int
  var strArr [3]string
  var boolArr [3]bool
  fmt.Printf("%v\n", numArr) // [0 0 0]
  fmt.Printf("%v\n", strArr) // [  ]
  fmt.Printf("%v\n", boolArr) // [false false false]
}
```

**利用初始化列表初始化数组**

```go
func main() {
  numArr := [3]int{1, 2, 3}
  strArr := [3]string{"abc", "123", "甲乙丙"}

  fmt.Printf("%v\n", numArr) // [1 2 3]
  fmt.Printf("%v\n", strArr) // [abc 123 甲乙丙]
}
```

**数组长度不确定**

如果数组长度不确定，可以使用 ... 代替数组的长度，编译器会根据元素个数自行推断数组的长度：

```go
func main() {
  numArr := [...]int{1, 2, 3}
  strArr := [...]string{"abc", "123", "甲乙丙"}

  fmt.Printf("%v\n", numArr)
  fmt.Printf("%v\n", strArr)
}
```

## 多维数组（以二维数组为例）

**初始化数组**

```go
func main() {
  arr := [3][4]int{
    {0, 1, 2, 3},
    {4, 5, 6, 7},
    {8, 9, 10, 11},
  }
  fmt.Printf("%v\n", arr)
}
```

**利用 append 添加数组项**

```go
func main() {
  arr := [][]int{}

  row1 := []int{0, 1, 2, 3}
  row2 := []int{4, 5, 6, 7}
  row3 := []int{8, 9, 10, 11}

  arr = append(arr, row1)
  arr = append(arr, row2)
  arr = append(arr, row3)

  fmt.Printf("%v\n", arr)
}
```

## 向函数传递数组

go 语言中的数组是值类型，因此在将数组传递给函数时，实际上是传递数组的副本。

```go
func changeArr(a []int) []int {
  a = append(a, 4)
  return a
}

func main() {
  arr := []int{0, 1, 2, 3}

  newArr := changeArr(arr)

  fmt.Printf("%v\n", arr) // [0 1 2 3]
  fmt.Printf("%v\n", newArr) // [0 1 2 3 4]
}
```
