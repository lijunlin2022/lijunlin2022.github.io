本节介绍了 `cmp` 的基本用法，以及 `jz/je` 和 `jnz/jne` 两个条件跳转指令，完成了判断用户输入的代码并封装了一个之后会经常用到的清屏函数 `ClearScreen()`

## cmp 基本用法

cmp 可以用来比较源操作数和目的操作数

```
cmp 目的操作数, 源操作数
```

> cmp 指令在源操作数和目的操作数之间执行隐含的减法操作
>
> 在比较两个**无符号操作数**的时候，会影响两个 CPU 标志位—— 零标志位 ZF 和 进位标志位 CF
>
> | CMP 的结果 | ZF   | CF   |
> | ---------- | ---- | ---- |
> | 目的 < 源  | 0    | 1    |
> | 目的 > 源  | 0    | 0    |
> | 目的 = 源  | 1    | 0    |
>
> —— 摘自 《Intel 汇编语言程序设计（第 5 版）》144 页

## jz/je 和 jnz/jne

于是我们可以通过判断这些标志位来进行条件跳转，下面是两个命令

- jz —— 如果 `源操作数 - 目的操作数 = 0`，即 ZF = 1 ，则进行跳转
- jnz —— 如果 `源操作数 - 目的操作数 ≠ 0` ，即 ZF = 0，则进行跳转

值得注意的是，命令 `jz` 和 `je` 是等价的，而 `jnz` 和 `jne` 是等价的

> 对于实现同一功能但指令助记符有两种形式的情况，在程序中究竟选用哪一种，视习惯或用途而定。例如，对于指令 JZ/JE LABEL，当比较两数相等转义时，常使用 JE，当比较某数为 0 转移时，常使用 JZ
>
> —— 摘自《汇编语言与接口技术（李元章）》104 页

## 判断 scanf 的输入类型

了解 cmp 和 je/jne 指令之后，我们现在可以判断 scanf 的输入了，在 `snake.cpp` 中，判断用户输入的代码放到了函数 `enterGame()` 中，要看它翻译的汇编结果，你可以查看 `snake.asm` 的函数 `enterGame()`

```c
void enterGame() {
	int selection;
	const char* paramater = "%d";
	__asm {
	enter_game:
		call showMainMenu

		// 获取用户选择
		lea eax, dword ptr ds : [selection]
		push eax
		mov ecx, dword ptr ds : [paramater]
		push ecx
		call scanf
		add esp, 8

		// 判断用户的选择
		mov eax, dword ptr ds : [selection]
		cmp eax, 1
		je start_game
		cmp eax, 2
		je end_game

		// 处理非法选择
		call handleIllegalSelection
		jmp enter_game

	start_game :
		call startGame

	end_game :
		call endGame
	}
}
```

## 延时和清屏

在上述代码中，处理非法输入时会调用 `handleIllegalSelection()` 函数，而在 `handleIllegalSelection()` 中调用了 `Sleep()` 函数和 `clearScreen()` 函数

### 延时函数

延时调用的是 Windows 提供的函数 `Sleep()` ，它的头文件是 `windows.h` ，参数以毫秒为单位

```c
push 2000
call Sleep
```

上述代码的意思就是延时 2s

值得注意的是，Windows 的函数**自己会平衡堆栈**，所以不需要像我们调用 scanf 或者 printf 那样还要加上 `add esp,4`

### 清屏函数

清屏函数调用的是函数 `system()`，它的头文件是 `stdlib.h`

```c
system("cls");
```

`windows.h` 中调用了这个函数，因此我们平时可以再 Windows 的命令提示符窗口下直接输入 `cls` 清屏

现在我们来封装这个函数，把它作为一个工具供以后使用

```c
void clearScreenUtil() {
	const char* clearScreen = "cls";
	__asm {
		mov eax, dword ptr ds : [clearScreen]
		push eax
		call system
		add esp, 4
	}
}
```
