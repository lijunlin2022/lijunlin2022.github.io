本节介绍了在贪吃蛇游戏中，如何画出墙壁和食物，以及为了在特定位置画出蛇，必须使用一个函数 SetConsoleCursorPosition，并封装了一个函数 gotoxyUtil

## 画墙壁和食物

在第 4 章时我们设置地图时同时设置了墙壁，在 `globalMapArr[25][25]` 中，是墙壁的地方均被设置为 `0bh`

在第 5 章时我们设置了食物，`globalMapArr[globalFoodX][globalFoodY]` 被设置为 `0ch`

画出地图和食物整体还是比较简单的，就是使用双重循环遍历二维数组

* 如果遇到了 `0bh`，就打印 `#` 当作墙壁
* 如果遇到了 `0ch`，就打印 `*` 当作食物
* 剩余情况，就打印空白

## SetConsoleCursorPosition —— 画蛇

和画墙壁和食物不同，我们需要根据坐标 `(x, y)` 来在特定位置打印 `O` 来充当蛇的身体

为了在特定位置画出蛇，需要使用 Windows 提供的函数，`SetConsoleCursorPosition()`

> * 语法
>
> ```c
> BOOL WINAPI SetConsoleCursorPosition(
>   _In_ HANDLE hConsoleOutput,
>   _In_ COORD  dwCursorPosition
> );
> ```
>
> * 参数
>   * `hConsoleOutput` 控制台屏幕缓冲区的句柄
>   * `dwCursorPosition` 指定新游标位置的 `oozie.coord.application.path`  结构
>
> —— [SetConsoleCursorPosition 函数 - Windows Console | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/console/setconsolecursorposition)

至于 `dwCursorPosition` ，它的结构如下：

> * 语法
>
> ```c
> typedef struct _COORD {
>   SHORT X;
>   SHORT Y;
> } COORD, *PCOORD;
> ```
>
> —— [COORD 结构 - Windows Console | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/console/coord-str)

## 封装在特定位置打印的函数

```c
void gotoxyUtil(int pos) {
	__asm {
		mov eax, dword ptr ds : [pos]
		push eax

		push -11
		call GetStdHandle
		push eax

		call SetConsoleCursorPosition
	}
}
```

其中，-11 代表句柄

## 值得注意的情况

可以看到 `SetConsoleCursorPosition()` 中的 `COORD` 结构中，内部参数 x 和 y 都是 short，也就是 16 字节，而我们在 32 位汇编下，一般都使用的是 32 字节的变量，为了能调用整个函数，我们需要对变量进行一些处理：

```c
void drawSnake() {
	int i;
	const char* format = "O";
    ...
    // 得到蛇的坐标, 拼接后调用 gotoxy
    mov ecx, dword ptr ds : [eax]
    // 左移 16 位, 用以将 x 和 y 两个 dword 的值拼接为 1 个 word
    shl ecx, 16													
    mov edx, dword ptr ds : [eax + 4]
    or ecx, edx
    push ecx
    call gotoxyUtil
    add esp, 4
    ...
}
```
