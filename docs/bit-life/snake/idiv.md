本节介绍了如何利用 rand、srand 和 time 生成随机数，以及 idiv 指令和 cdq 指令的用法，然后通过这些知识，在墙壁范围内随机设置了食物的位置和蛇头的位置

## 食物的位置设计思路

游戏开始时，食物会随机出现在墙壁内，当蛇吃下食物后，原本的食物消失且新的位置将会生成食物

关键问题在于，如何生成随机的食物，这个问题我们在 (3) 时会谈到

## 蛇头的位置设计思路

和食物一样，蛇头的位置也应该是随机出现的，但应该和食物随机出现的位置不同。蛇头还要考虑到今后吃下食物之后，蛇会变长

我们使用一个结构体数组来存储蛇的位置

```c
struct SnakePos {
	int x;
	int y;
} globalSnakeArr[100];
```

`globalSnakeArr[0]` 用来存储蛇头的坐标，至于吃到食物如何增长，以及蛇如何移动，我们之后再谈

## rand, srand 和 time

在 C 语言的头文件 `stdlib.h` 中有一个函数 `rand()`，它可以返回一个范围在 `0` 到 `RAND_MAX` 的伪随机整数。

在调用 `rand()` 函数之前，可以使用 `srand()` 设置随机数种子，如果没有设置随机数种子，`rand()` 会自动设置随机数种子为 `1`

> `srand(unsigned seed)` 通过参数 `seed` 改变系统提供的种子值，从而可以使每次调用 `rand()` 函数生成的伪随机数序列不同，通常利用系统时间来改变系统的种子值，即 `srand(time(NULL))`

## idiv 指令

假设墙壁是 20 × 20 的宽度，为了让食物出现在墙壁内，需要对生成的随机数取 20 的余数，这时候我们就需要使用一个指令 `idiv`

> 该指令只含有一个源操作符，该操作符作为除数使用。注意，它只能是寄存器或存储器操作数，不能是立即数。被除数必须实现放在隐含的寄存器中。可以实现 8 位、16 位、32 位带符号操作数除。
>
> * 若源操作数是 8 位，则被除数放在 AX 中，商在 AL 中，余数在 AH 中
> * 若源操作数是 16 位，则被除数在 DX:AX 一对寄存器中，商在 AX 中，余数在 DX 中
> * 若源操作数是 32 位，则被除数在 EDX:EAX 一对寄存器中，商在 EAX 中，余数在 EDX 中
>
> —— 《汇编语言与接口计数（李元章）》

所以当使用好 idiv 指令之后，我们想要的余数就在 EDX 中

## 实际代码

这是生成食物的代码：

```c
void generateRandomFood() {
	__asm {
		// 获取时间	
		push 0
		call time
		add esp, 4
		// 设置随机数种子
		push eax
		call srand
		add esp, 4
		// 获取 x 坐标值
		call rand
		cdq
		mov ecx, 25
		idiv ecx
		mov dword ptr ds : [globalFoodX] , edx
		// 获取 y 坐标值
		call rand
		cdq
		mov ecx, 25
		idiv ecx
		mov dword ptr ds : [globalFoodY] , edx
	}
}
```

这是生成蛇头位置的代码：

```c
void setSnakePosition() {
	__asm {
	set_snake_pos:
		call generateRandomSnakeHead

		lea eax, dword ptr ds : [globalMapArr]
		mov ecx, dword ptr ds : [globalInitialSnakeHeadX]
		imul ecx, ecx, 25
		add eax, ecx
		mov edx, dword ptr ds : [globalInitialSnakeHeadY]
		add eax, edx

		mov cl, byte ptr ds : [eax]
		cmp cl, 0xB
		// 如果和墙重叠, 则回到开始位置, 重新生成蛇头
		je set_snake_pos

		// 生成的蛇头满足要求, 则写入蛇的结构体
		lea eax, dword ptr ds : [globalSnakeArr]
		mov ecx, dword ptr ds : [globalSnakeLen]
		imul ecx, ecx, 8
		add eax, ecx

		mov ecx, dword ptr ds : [globalInitialSnakeHeadX]
		mov dword ptr ds : [eax] , ecx

		mov ecx, dword ptr ds : [globalInitialSnakeHeadY]
		mov dword ptr ds : [eax + 4] , ecx

		// 设置蛇的长度为 1
		mov dword ptr ds : [globalSnakeLen] , 1
	}
}
```

## cdq 指令

上面的代码中出现了 cdq 指令

> 双字扩展成四字指令 CDQ (Convert Double to Quad)
>
> 格式：CDQ
>
> 功能：把 EAX 寄存器中的符号位值扩展到 EDX 中
>
> 说明：80386 以上 CPU 支持此指令
>
> —— 《汇编语言与接口计数（李元章）》

在很久以前指令集规定除数必须是被除数的一半长，所以需要 CDQ 指令

经过我在 VS 2019 里面测试，不使用 CDQ 运行也是没有问题的
