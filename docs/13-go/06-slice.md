# 切片

go 语言中数组是不可变的，切片是对数组的抽象。与数组相比，切片的长度是不固定的，可以追加元素，在追加时可能使切片的容量增大。

## 定义

切片有两种定义方式：

- 声明一个未指定长度的数组

  ```go
  var slice1 []int

  var slice2 = []int{1, 2, 3}
  ```

- 使用 `make` 创建切片

  ```go
  var slice1 []int = make([]int, 3)

  slice2 := make([]string, 2)

  // 第三个参数是可选参数，代表容量 capacity
  slice3 := make([]string, 3, 6)
  ```

## len() 和 cap()

go 语言中，切片由三部分组成：指针、长度和容量。指针指向切片的首个元素，长度表示切片中元素的数量，容量表示切片的最大长度。

用 len() 可以获取长度，用 cap() 可以获取容量。

```go
func main() {
  var slice1 []int // 空切片默认长度和容量都为 0

  var slice2 = []int{1, 2, 3} // 未指定长度和容量

  var slice3 = make([]int, 3, 6) // 初始化切片，指定长度和容量不同

  // slice: [], len: 0, cap: 0
  fmt.Printf("slice: %v, len: %d, cap: %d\n", slice1, len(slice1), cap(slice1))

  // slice: [1 2 3], len: 3, cap: 3
  fmt.Printf("slice: %v, len: %d, cap: %d\n", slice2, len(slice2), cap(slice2))

  // slice: [0 0 0], len: 3, cap: 6
  fmt.Printf("slice: %v, len: %d, cap: %d\n", slice3, len(slice3), cap(slice3))
}
```

## 截取

可以通过设置下限、上限，来将数组截取成切片。

```go
func main() {
  arr := [10]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}

  slice1 := arr[2:8]
  fmt.Println(slice1) // [2 3 4 5 6 7]

  slice2 := arr[2:]
  fmt.Println(slice2) // [2 3 4 5 6 7 8 9]

  slice3 := arr[:8]
  fmt.Println(slice3) // [0 1 2 3 4 5 6 7]

  slice4 := arr[:]
  fmt.Println(slice4) // [0 1 2 3 4 5 6 7 8 9]
}
```

切片还可以再次截取成为新的切片。

```go
func main() {
  arr := [10]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}

  slice1 := arr[2:8]
  fmt.Println(slice1) // [2 3 4 5 6 7]

  slice2 := slice1[:3]
  fmt.Println(slice2) // [2 3 4]

  slice3 := slice2[1:]
  fmt.Println(slice3) // [3 4]
}
```

go 语言中，切片、切片的切片、还有数组是共享内存空间的。因此切片的容量常常大于它的长度。

go 语言有个特性，当从一个切片创建另一个切片时，我们可以指定一个**大于原始切片长度**但是**小于等于原始切片容量**的结束索引。

```go
func main() {
  arr := [10]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}

  slice1 := arr[2:4]
  fmt.Println(slice1) // [2 3]

  slice2 := slice1[0:8]
  fmt.Println(slice2) // [2 3 4 5 6 7 8 9]
}
```

## 和数组的内存关系

一般来说，切片和数组的内存是共享的，因此修改切片的元素，数组的元素也会被改变。

```go
func main() {
  arr := []string{"A", "B", "C", "D", "E"}

  slice := arr[:]

  slice[2] = "甲"

  fmt.Println(slice) // [A B 甲 D E]
  fmt.Println(arr)   // [A B 甲 D E]
}
```

但是，如果你添加的元素数量超过了切片的容量，那么 Go 语言会创建一个新的数组，并将所有的元素（包括原始的元素和新添加的元素）复制到新的数组中。在这种情况下，切片不再共享原始数组的内存空间，而是指向新的数组。

```go
func main() {
  arr := []string{"A", "B", "C", "D", "E"}

  slice := arr[:]

  slice = append(slice, "甲", "乙")

  fmt.Println(slice) // [A B C D E 甲 乙]
  fmt.Println(arr)   // [A B C D E]
}
```
