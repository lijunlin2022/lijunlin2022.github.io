# ASCII、GBK、Unicode、UTF-32、UTF-16 和 UTF-8

最近在研究 [为什么 js 判断 emoji 的长度不对](../../basic-javascript-knowledge/fragment/why-does-js-judge-that-the-length-of-emoji-is-incorrect.md) 这个问题。

因为「JavaScript 字符串使用了两种 Unicdoe 编码混合的策略：UCS-2 和 UTF-16」，所以要弄明白上面的问题，有必要去研究各种编码。

## ASCII

因为计算机是美国人发明了，所以一开始计算机里的字符是美国人设计的，只包含了英文字母、数字和一些符号，一共 127 个。

ASCII 码是用 8 bit 来表示，也就是 1 字节，且第一位一直用 0 来表示。

具体对应的字体表格可以看 [ASCII 的维基百科](https://zh.m.wikipedia.org/zh-hans/ASCII)

## GBK

然而计算机除了在美国使用外，在中国也会使用。

所以我们需要对中文也进行编码。

GBK 编码是这样的。

1. 使用 1 字节来表示原本的 ASCII 码
2. 使用 2 字节来表示中文字符

## Unicode

国际组织统一设计了一套编码，将所有的字符分为了 17 组，称为 17 个平面（Plane）。

第 0 组称为基础平面（Basic Plane），其他组叫扩展平面（Supplementary Plane）。

## UTF-32

所谓 UTF-32，就是用 32 bit（4 Byte）来表示字符的编码。

它的表示非常简单粗暴。比如数字 5

0000 0000 0000 0000 0000 0000 0011 0101

但是这样表示有一个问题，那就是浪费了很多空间，数字 5 中，其实有效的只有 1 字节，但是我们却不得不用 4 字节来表示它，

如果用他来表示文件，那么会导致文件奇大无比。      

## UTF-16

UTF-16 是变长的编码，基本平面用 16 bit (2 Byte) 表示，而扩展平面用 32 bit (4 Byte)

## UCS-2

UCS-2 是一种定长的编码，简单来看，可以认为 UCS-2 就是 UTF-16 的定长部分。

1990 年 UCS-2 编码方案发布，1995 年 JavaScript 语法被设计出来，1996 年 UTF-16 编码方案才发布。

所以 JavaScript 设计时，还没有 UTF-16 编码方案呢。

## UTF-8

UTF-8 也是变长的编码，它用 8 bit（1 Byte）来表示很多基础字符。

## 参考

https://zh.m.wikipedia.org/zh-hans/ASCII

https://zhuanlan.zhihu.com/p/51202412

https://zh.wikipedia.org/wiki/UTF-16

https://github.com/SamHwang1990/blog/issues/2