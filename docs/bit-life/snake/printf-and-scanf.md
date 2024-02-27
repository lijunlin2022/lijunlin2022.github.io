本节以一个 Hello World 介绍了汇编嵌套 C 程序的基本结构，然后介绍了 printf 和 scanf 在汇编中的基本用法，本节之后，应该能完成显示主菜单的部分代码

## 开发环境

 Visual Studio 2019 创建新项目 → C++ 空项目 → 源文件右键 → 添加新建项 → Test.cpp

## Hello World

我们先来看一个简单的 Hello World 程序

```
#include <stdio.h>
void main() {
	const char *szHello = "Hello World";
	__asm {
		mov eax, dword ptr ds:[szHello]
		push eax
		call printf
		add esp, 4
	}
}
```

下面逐行逐行地解释程序

- 为什么要包含头文件 studio ？

  ```c
  #include <stdio.h>
  ```

  C 嵌套汇编时，为了能在控制台打印出结果，我们需要调用标准库的 studio 的 printf 函数

- szHello 前的 sz 是什么意思？

  ```c
  const char *szHello = "HelloWorld";
  ```

  此处使用了匈牙利命名法，sz 是 String Terminated with a Zero 的缩写，意为 以 '\0' 结尾字符串

  为什么以 `'\0'` 结尾呢？

   C 语言没有专用的字符串变量，要用一个字符数组来存放。为了确定字符串的结束位置，C 语言创建字符串时总是在末尾添加 '\0' 字符

- `__asm {}` 是什么意思？

  ```assembly
  __asm {
  
  }
  ```

  代表包含在花括号内部的代码均为汇编代码

- dword ptr

  如果没有 dword ptr，可以看出汇编代码就是直接寻址的代码

  ```
  mov eax, ds:[szHello]
  ```

  事实上，由于段地址总是默认存放在 ds 寄存器中，所以其实可以直接写为

  ```
  mov eax, [szHello]
  ```

  如果你尝试将 Test.cpp 中的内容改为上述两种写法，其实也不会报错

  

  dword 是意思是 double word，即指令长度是**双字**(32 bit)，ptr 的意思是 pointer，即指针

  ```assembly
  ; 意思是 取出 ds:[szHello] 地址的双字型数据，赋值给 eax
  mov eax, dword ptr ds:[szHello]
  ```

  加上 dword ptr 有助于让 eax 理解传递给它的参数是双字的

  之后如果我们要传递其他长度，比如**单字节**(8 bit)，可以这样写

  ```assembly
  mov al, byte ptr ds:[...]
  ```

- 调用函数以及保持堆栈平衡

  ```assembly
  push eax
  call printf
  add esp, 4
  ```

  要调用一个子程序，且给这个子程序传递参数，有三种方法，我们这里使用的是堆栈传递参数（具体可以看《汇编技术与接口（李元章）》第 5 章）

  注意点：

  - 传递子程序参数，我们需要先将参数压栈
  - C 语言函数，传递参数时是从右往左压栈
  - 调用函数之后，需要保证堆栈平衡
  - 子程序的返回结果默认保存在寄存器 EAX 中

  这里我们首先将保存在 eax 中的参数压栈，然后调用 printf 函数，之后再恢复堆栈平衡

## lea，结合 scanf

之前我们已经学会如何使用 printf 函数，解析来我们来学习如何使用 scanf 函数

常见的 scanf 用法有

```c
int age = 0;
scanf("%d", &age);

char ch = 0;	// 初始化为 ascii 码表中的 0，即 NULL
scanf("%c", &ch);

char name[21];
memset(name, 0, sizeof(name));
scanf("%s", name);
```

其中，`&age` 和 `&ch` 表示取地址，而 `name` 是数组名字，直接代码地址

我们在写汇编代码时，也需要取地址，这时候就需要用到命令 `lea` ，`lea` 就表示取内存的地址

例如：

```
lea eax, dword ptr ds:[szOutput]
```

就代表取 `ds:[szOutPut]` 的地址，放到寄存器 eax 中

## 完成部分显示主菜单的代码

现在我们可以完成部分显示主菜单的代码了，下面代码是 `snake.cpp` 的 `showMainMenu()` 函数，它翻译的纯汇编具体可以看 `snake.asm` 的 `showMainMenu()` 函数

```c
void showMainMenu() {
	const char* dividingLine = "-------------------------------------------------------------------\n";
	const char* authorInfo = "作者: 小霖家的混江龙\n";
	const char* operationGuide = "按 1 开始游戏\n按 2 结束游戏\n按 W 向上移动\n按 S 向下移动\n按 A 向左移动\n按 D 向右移动\n";
	__asm {
		// 打印分割字符
		mov eax, dword ptr ds : [dividingLine]
		push eax
		call printf
		add esp, 4

		// 打印作者信息
		mov eax, dword ptr ds : [authorInfo]
		push eax
		call printf
		add esp, 4

		// 打印提示信息
		mov eax, dword ptr ds : [operationGuide]
		push eax
		call printf
		add esp, 4

		// 打印分割字符
		mov eax, dword ptr ds : [dividingLine]
		push eax
		call printf
		add esp, 4
	}
}
```

## 碎碎念

博主不是很喜欢匈牙利命名法，因此在 snake.cpp 和 snake.asm 中几乎都未使用匈牙利命名法

我在 (3) 中给出的 C 语言代码，将 int，char，char 型数组都进行了初始化，事实上你不初始化也不会报错

我这么做主要是提醒自己，初始化很重要

为什么初始化很重要呢？int，char 和数组即便不初始化，编译器也能够判断出它们应该占用多大的内存空间，但是如果是一个指针，没有初始化，编译器便完全无法确定指针应该分配多少内存，程序便会报错
