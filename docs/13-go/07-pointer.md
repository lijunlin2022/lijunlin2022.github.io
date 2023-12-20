# 指针

## 取地址符 &

变量是一种使用方便的占位符，用于引用计算机内存地址。go 语言的取地址符是 &，放到一个变量前使用就会返回相应变量的内存地址。

```go
func main() {
  var a int = 1
  fmt.Printf("变量 a 的地址: %x\n", &a)
}
```

## 指针定义和使用

指针使用流程：

- 定义指针变量。
- 为指针变量赋值。
- 访问指针变量中指向地址的值。

一个指针变量指向了一个值的内存地址。在指针类型前面加上 * 号（前缀）来获取指针所指向的内容。

```go
func main() {
  var a int = 20   // 实际变量
  var ip *int = &a // 指针变量

  fmt.Printf("变量 a 的地址: %x\n", ip)
  fmt.Printf("指针 ip 存储的变量是: %d\n", *ip)
}
```

## 空指针

当一个指针被定义后没有分配到任何变量时，它的值为 nil。nil 指针也称为空指针。

```go
func main() {
  var ptr *int // 指针变量

  fmt.Printf("空指针 %x\n", ptr) // 空指针 0
  fmt.Println(ptr == nil)     // true
}
```

## 指针数组

案例：指针数组，每个指针都指向一个变量。

```go
func main() {
  a := 10
  b := 20
  c := 30

  var ptrs [3]*int

  ptrs[0] = &a
  ptrs[1] = &b
  ptrs[2] = &c

  for i := 0; i < 3; i++ {
    fmt.Printf("a[%d] = %d\n", i, *ptrs[i])
  }
}
```

案例：指针数组，每个指针都指向一个数组。

```go
func main() {
  a := [3]string{"A", "B", "C"}
  b := [3]string{"a", "b", "c"}

  var ptrs [2]*[3]string

  ptrs[0] = &a
  ptrs[1] = &b

  fmt.Printf("%v\n", *ptrs[0])
  fmt.Printf("%v\n", *ptrs[1])
}
```

## 指针作为函数的参数

```go
func swap(num1, num2 *int) {
  temp := *num1
  *num1 = *num2
  *num2 = temp
}

func main() {
  x := 1
  y := 2

  fmt.Printf("x = %d, y = %d\n", x, y) // x = 1, y = 2
  swap(&x, &y)
  fmt.Printf("x = %d, y = %d\n", x, y) // x = 2, y = 1
}
```

```go
func changeArrWithPtr(a *[]int) []int {
  *a = append(*a, 4)
  return *a
}

func main() {
  arr := []int{0, 1, 2, 3}

  newArr := changeArrWithPtr(&arr)

  fmt.Printf("%v\n", arr)    // [0 1 2 3 4]
  fmt.Printf("%v\n", newArr) // [0 1 2 3 4]
}
```
