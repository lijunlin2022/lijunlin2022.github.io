# 使用正则表达式

Python 的正则表达式模块名字为 "re"，也就是 "regular expression" 的首字母缩写。在 Python 中需要首先导入这个模块再进行使用。导入的语句为：

```python
import re
```

## findall()

Python 的正则表达式模块包含一个 findall 方法，它能够以列表的形式返回所有满足要求的字符串。findall 的函数原型为：

```python
re.findall(pattern, string, flags = 0)
```

pattern 表示正则表达式，string 表示原来的字符串，flags 表示一些特殊功能的标志。

findall 的结果是一个列表，包含了所有的匹配到的结果。如果没有匹配到结果，就会返回空列表。

```python
import re

content = '我的微博密码是: 1234567, QQ 密码是: 33445566, 银行卡密码是: 888888, GitHub 密码是: 999abc999, 帮我记住它们'

passworld_list = re.findall('密码是: (.*?),', content)
name_list = re.findall('姓名是: (.*?),', content)

print(passworld_list)
print(name_list)
```

当需要提取某些内容的时候，使用小括号将这些内容括起来，这样才不会得到不相干的信息。如果包含多个 "(.*? )" 怎么返回呢？返回的仍然是一个列表，但是列表里面的元素变为了元组。比如下面这个例子，元组里面的第 1 个元素是账号，第 2 个元素为密码。

```python
import re

content = '我的微博账号是: zhangsan, 密码是: 1234567, QQ 账号是: lisi, 密码是: 33445566, GitHub 账号是: wangwu, 密码是: 999abc999, 帮我记住它们'

account_passworld_list = re.findall('账号是: (.*?), 密码是: (.*?), ', content)

print(account_passworld_list)
```

函数原型中有一个 flags 参数。这个参数是可以省略的。当不省略的时候，具有一些辅助功能，例如忽略大小写、忽略换行符等。这里以忽略换行符为例来进行说明:

```python
import re

string = '''我叫zhangsan, 我的密码是: 123
456,
'''

password_flags = re.findall('密码是: (.*?),', string, re.S)
password_no_flags = re.findall('密码是: (.*?),', string)

print('使用 re.S 时: {}'.format(password_flags)) # 使用 re.S 时: ['123\n456']
print('不使用 re.S 时: {}'.format(password_no_flags)) # 不使用 re.S 时: []
```

在爬虫的开发过程中非常容易出现这样的情况，要匹配的内容存在换行符 "\n"。要忽略换行符，就需要使用到 "re.S" 这个 flag。虽然说匹配到的结果中出现了 "\n" 这个符号，不过总比什么都得不到强。内容里面的换行符在后期清洗数据的时候把它替换掉即可。

## search()

search() 的用法和 findall() 的用法一样，但是 search() 只会返回第 1 个满足要求的字符串。一旦找到符合要求的内容，它就会停止查找。对于从超级大的文本里面只找第 1 个数据特别有用，可以大大提高程序的运行效率。

search() 的函数原型为：

```python
re.search(pattern, string, flags = 0)
```

对于结果，如果匹配成功，则是一个正则表达式的对象；如果没有匹配到任何数据，就是 None。如果需要得到匹配到的结果，则需要通过. group() 这个方法来获取里面的值。

```python
import re

content = '我的微博密码是: 1234567, QQ 密码是: 33445566, 银行卡密码是: 888888, GitHub 密码是: 999abc999, 帮我记住它们'

password_search = re.search('密码是: (.*?),', content)
password_not_find = re.search('xx 是: (.*?),', content)

print(password_search) # <re.Match object; span=(4, 17), match='密码是: 1234567,'>
print(password_search.group()) # 密码是: 1234567,
print(password_search.group(1)) # 1234567
print(password_not_find) # None
```

只有在 .group() 里面的参数为1的时候，才会把正则表达式里面的括号中的结果打印出来。.group() 的参数最大不能超过正则表达式里面括号的个数。参数为 1 表示读取第1个括号中的内容，参数为 2 表示读取第 2 个括号中的内容，以此类推。

```python
import re

content = '我的微博账号是: zhangsan, 密码是: 1234567, QQ 账号是: lisi, 密码是: 33445566, GitHub 账号是: wangwu, 密码是: 999abc999, 帮我记住它们'

account_passworld = re.search('账号是: (.*?), 密码是: (.*?), ', content)

print(account_passworld.group(1)) # zhangsan
print(account_passworld.group(2)) # 1234567
```

## 使用技巧

### 不需要 compile

网上很多人的文章中，正则表达式使用re.compile()这个方法，导致代码变成下面这样：

```python
import re
example_text = '我是kingname, 我的微博账号是: kingname, 密码是: 12345678, QQ账号是: 99999, 密码是: 890abcd, 请记住他们。'
new_pattern=re.compile('账号是: (.*?), 密码是: (.*?), ', re.S)
user_pass = re.findall(new_pattern, example_text)
print(user_pass)
```

这种写法虽然结果正确，但纯粹是画蛇添足。如果阅读 Python 的正则表达式模块的源代码，就可以看出 re.compile() 是完全没有必要的。

re.findall() 自带 re.compile() 的功能，所以没有必要使用 re.compile()。

### 先抓大后抓小

一些无效内容和有效内容可能具有相同的规则。这种情况下很容易把有效内容和无效内容混在一起，如下面这段文字：

```
有效用户: 
姓名: 张三
姓名: 李四
姓名: 王五
无效用户: 
姓名: 不知名的小虾米
姓名: 隐身的张大侠
```

有效用户和无效用户的名字前面都以 "姓名: " 开头，如果使用 "姓名: (.*?)\n" 来进行匹配，就会把有效信息和无效信息混在一起，难以区分。

要解决这个问题，就需要使用先抓大再抓小的技巧。先把有效用户这个整体匹配出来，再从有效用户里面匹配出人名。

先抓大再抓小的思想会贯穿整个爬虫开发过程，一定要重点掌握。

### 括号内和括号外

在上面的例子中，括号和 ".*?" 都是一起使用的，因此可能会有读者认为括号内只能有这 3 种字符，不能有其他普通的字符。但实际上，括号内也可以有其他字符。

```python
import re

html = '''
<div class="tail-info">客户端</div>
<div class="tail-info">2017-07-01 13:45:00</div>
'''

result_1 = re.findall('tail-info">(.*?)<', html)
result_2 = re.findall('tail-info">2017(.*?)<', html)
result_3 = re.findall('tail-info">(2017.*?)<', html)

print('括号里只有 .*? 得到的结果：{}'.format(result_1)) # 括号里只有 .*? 得到的结果：['客户端', '2017-07-01 13:45:00']
print('2017 在括号外得到的结果: {}'.format(result_2)) # 2017 在括号外得到的结果: ['-07-01 13:45:00']
print('2017 在括号内得到的结果: {}'.format(result_3)) # 2017 在括号内得到的结果: ['2017-07-01 13:45:00']
```

如果括号里面有其他普通字符，那么这些普通字符就会出现在获取的结果里面。举一个例子，如果说"左手和右手之间"，一般指的是躯干这一部分。但如果说"左手和右手之间，包括左手和右手"，那么就是指的整个人。而把普通的字符放在括号里面，就表示结果中需要包含它们。
