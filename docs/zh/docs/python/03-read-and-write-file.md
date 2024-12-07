# 读写文件

使用 Python 来读/写文本需要用到 "open" 这个关键字。它的作用是打开一个文件，并创建一个文件对象。使用 Python 打开文件，有两种写法。第 1 种方式如下：

```python
f = open('文件路径', '文件操作方式', encoding = 'utf-8')
对文件进行操作
f.close()
```

第 2 种方式，使用 Python 的上下文管理器：

```python
with open('文件路径', '文件操作方式', encoding = 'utf-8') as f:
  对文件进行操作
```

第 1 种方式需要手动关闭文件，但是在程序开发中经常会出现忘记关闭文件的情况。第 2 种方法不需要手动关闭文件，只要代码退出了缩进，Python 就会自动关闭文件。

推荐第 2 种方式。

## 读写文本文件

### 读

用 Python 打开一个文本文件时，首先要保证这个文件是存在的。在读文件的时候，"文件操作方式"这个参数可以省略，也可以写成 "r"，也就是 read 的首字母。文件路径可以是绝对路径，也可以是相对路径。如果是绝对路径，Linux 和 Mac OS 不能直接使用"～"表示 "home目录"，因为 Python 不认识 "～" 这个符号。如果非要使用这个符号，需要使用 Python 的 "os" 模块，代码如下：

```python
import os
real_path = os.path.expanduser('～/project/xxx')
```

这样，Python 就会将这种风格的路径转化为 Python 能认识的绝对路径。

文本文件可以按行读取，也可以直接读取里面的所有内容。读取所有行，并以列表的形式返回结果，代码如下：

```python
with open('text.txt', encoding = 'utf-8') as f:
  content_list = f.readlines()
  print(content_list)
```

直接把文件里面的全部内容用一个字符串返回，代码如下：

```python
with open('text.txt', encoding = 'utf-8') as f:
  content = f.read()
  print(content)
```

### 写

使用 Python 写文件也需要先打开文件，使用如下代码来打开文件：

```python
with open('new.txt', 'w', encoding = 'utf-8') as f:
  通过 f 来写文件
```

这里多出来一个参数 "w", w 是英文 write 的首字母，意思是以写的方式打开文件。这个参数除了为 "w" 外，还可以为 "a"。它们的区别在于，如果原来已经有一个 new.txt 文件了，使用 "w" 会覆盖原来的文件，导致原来的内容丢失；而使用 "a"，则会把新的内容写到原来的文件末尾。写文件时可以直接写一大段文本，也可以写一个列表。

直接将一大段字符串写入到文本中，可以使用下面这段代码：

```python
with open('text.txt', 'w', encoding = 'utf-8') as f:
  f.write('一大段文字')
```

把列表里面的所有字符串写入到文本中，可以使用下面这段代码：

```python
with open('text.txt', 'w', encoding = 'utf-8') as f:
  f.writelines(['第一段话', '第二段话', '第三段话'])
```

需要特别注意，写列表的时候，Python 写到文本中的文字是不会自动换行的，需要人工输入换行符才可以。

## 读写 CSV 文件

### 读

CSV 文件可以用 Excel 或者 Numbers 打开，得到可读性很高的表格。

CSV 文件本质上就是文本文件，但是如果直接用文本编辑器打开，可读性并不高。

Python 自带操作 CSV 的模块。使用这个模块，可以将 CSV 文件的内容转换为 Python 的字典，从而方便使用。

```python
import csv

with open('new.csv', encoding = 'utf-8') as f:
  reader = csv.DictReader(f)
  for row in reader:
    print(row)
```

代码中，for 循环得到的 row 是 OrderedDict（有序字典），可以直接像普通字典那样使用：

```python
import csv

with open('new.csv', encoding = 'utf-8') as f:
  reader = csv.DictReader(f)
  for row in reader:
    name = row['name']
    age = row['age']
    salary = row['salary']
    print(name)
```

### 写

Python 可以把一个字典写成 CSV 文件，或者把一个包含字典的列表写成 CSV 文件。Python 写 CSV 文件比读 CSV 文件稍微复杂一点，因为要指定列名。列名要和字典的 Key 一一对应。Python 写 CSV 文件时需要用到 csv.DictWriter() 这个类。它接收两个参数：第 1 个参数是文件对象 f；第 2 个参数名为 fieldnames，值为字典的 Key 列表。写入 CSV 文件的列名行：

```python
import csv

data = [
  { 'name': 'kingname', 'age': 24, 'salary': 99999 },
  { 'name': 'meiji', 'age': 20, 'salary': 100 },
  { 'name': '小明', 'age': 30, 'salary': 'N/A' }
]

with open('new.csv', 'w', encoding = 'utf-8') as f:
  writer = csv.DictWriter(f, fieldnames = ['name', 'age', 'salary'])
  writer.writeheader() # 写入列名
  writer.writerows(data) # 将包含的列表全部写入到 CSV 文件
  writer.writerow({ 'name': '超人', 'age': 999, 'salary': 0 }) # 写入单个字典
```
