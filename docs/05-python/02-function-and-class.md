# 函数与类

## 函数与默认参数

在 Python 里面，函数的参数可以有默认值。当调用函数的时候不写参数时，函数就会使用默认参数。请看下面的代码：

```python
def get_input_with_default_para(split_char = ', '):
  input_string = input('请输入由{}分隔的两个非零整数：'.format(split_char))
  a_string, b_string = input_string.split(split_char)
  return int(a_string), int(b_string)

c, d = get_input_with_default_para()
print('第一个参数是 {}, 第二个参数是 {}'.format(c, d))
```

函数也可以有多个默认参数，例如如下的代码：

```python
def print_x_y_z(x = 100, y = 0, z = 50):
  print('x的值为{}, y的值为{}, z的值为{}'.format(x, y, z))

print_x_y_z(1, 2, 3) # 直接写上 3 个参数，从左到右依次赋值
print_x_y_z(6) # 只写一个值的时候，优先赋值给左边的参数
print_x_y_z(y = -8) # 也可以指定参数的名字，将值直接赋给指定的参数
print_x_y_z(y = '哈哈', x = '嘿嘿') # 如果指定了参数名，那么参数顺序就无关紧要
```

## 类与面向对象

在 Python 中使用关键字 `class` 来定义一个类。类一般由以下元素构成：

- 类名
- 父类
- 初始化方法（在有些编程语言中叫作构造函数）
- 属性
- 方法

```python
class People(object):
  def __init__(self, name, age):
    self.name = name
    self.age = age
    self.jump()

  def walk(self):
    print('我的名字叫作：{}，我正在走路'.format(self.name))

  def eat(self):
    print('我的名字叫作：{}，我正在吃饭'.format(self.name))

  def jump(self):
    print('我的名字叫作：{}，我跳了一下'.format(self.name))

xiaoer = People('王小二', 18)
zhangsan = People('张三', 30)

print('=============获取对象的属性=============')
print(xiaoer.name)
print(zhangsan.age)

print('=============执行对象的方法==============')
xiaoer.walk()
zhangsan.eat()
```
