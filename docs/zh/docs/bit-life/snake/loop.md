本文介绍了游戏中的地图设计：20 x 20 的数组，其中数组的四边都设置为墙壁。为了更清晰简明地介绍实现方法，采用了先写 C 语言代码，再使用汇编语言实现的办法

## 地图设计

我们的地图设计为 20 x 20 的数组，其中四面都是墙 

```
#################### // 如果使用 C 语言，则表示为
#..................# // char g_MapDataArr[20][20];
#..................# // 如果将空白设置为 0，墙设置为 0bh
#..................# // 顶墙 g_MapDataArr[0][0-19] = 0bh
#..................# // 底墙 g_MapDataArr[19][0-19] = 0bh
#..................# // 左墙 g_MapDataArr[0-19][0] = 0bh
#..................# // 右墙 g_MapDataArr[0-19][19] = 0bh
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
####################
```

关键问题在于：在汇编中我们如何表示二维数组呢？

## 汇编表示二维数组

内存是线性排列的，相当于一维数组，我们要做的就是将一维数组加以变化后模拟二维数组

假如我们申请 `char arr[400]`，要想用它模拟二维数组，则

```
######################### // char arr[0-19]
#.......................# // char arr[20-39]
#.......................# // char arr[40-59]
#.......................# // char arr[60-79]
.........................
#.......................# // char arr[260-379]
######################### // char arr[280-399]
```

而如果我们想要访问 `char g_MapDataArr[3][12]` 时，我们该如何模拟呢？

我们应该用 `char arr[3 * 20 + 12]` 来模拟

现在我们来利用汇编，将 `char g_MapDataArr[3][12]` 设置为 0bh

```
char g_MapDataArr[3][12];
void InitGameMapData() {
  __asm {
    // 初始化 g_MapDataArr 内容全部为 0
    // 调用了 memset 函数
    push 400
    push 0
    lea eax, dword ptr ds:[g_MapDataArr]
    push eax
    call memset
    add esp, 12
    
    lea eax, dword ptr ds:[g_MapDataArr]	// 获得 g_MapDataArr[0][0] 的地址
    mov ecx, 72								// 72 = 20 + 20 + 20 + 12
    mov byte ptr ds:[eax + ecx], 0bh		// 给 g_MapDataArr[3][12] 赋值
  }
}
```

## 结合循环

在上一节中，我们使用了 `mov byte ptr ds:[eax + ecx], 1` 来完成赋值

如果我们将 ecx 设置为变量，在一个循环里面对 ecx 加 1，不就可以完整地对某一行或者某一列进行赋值了吗？

这正是我们的思路，利用变量结合循环给墙壁赋值

用 C 语言表述如下

```c
int i = 0;
while (i >= 19) {
    g_MapDataArr[0][i] = 0xB;	// 顶墙
    g_MapDataArr[19][i] = 0xB;	// 底墙
    g_MapDataArr[i][0] = 0xB;	// 左墙
    g_MapDataArr[i][19] = 0xB;	// 右墙
    i++;
}
```

下面我们来学习汇编的 loop 循环

```
  mov ecx, 5
目标地址:
  代码
  loop 目标地址
```

> loop 指令的执行包含两部，首先，ecx 减 1，接着与 0 相比较，如果 ecx 不等于 0，则跳转到目的地址（表好处）；如果 ecx 等于 0，则不妨生跳转，执行后面的语句。

可以看到，loop 循环和我们之前的 C 语言代码逻辑不太一致，我们可以将 C 代码修改一下，使它符合 loop 循环的逻辑

```c
int i = 0;
int j = 20;
while (j != 0) {
    g_MapDataArr[0][i] = 0xB;	// 顶墙
    g_MapDataArr[19][i] = 0xB;	// 底墙
    g_MapDataArr[i][0] = 0xB;	// 左墙
    g_MapDataArr[i][19] = 0xB;	// 右墙
    i++;
    j--;
}
```

与之对应的汇编语句为：

```
; 使用循环设置地图的边界
    mov dword ptr ds : [i] , 0
    mov ecx, 20;
set_wall:
    ; 顶墙
    lea eax, dword ptr ds : [g_MapDataArr]
    mov ebx, dword ptr ds : [i]
    mov byte ptr ds : [eax + ebx] , 0bh
    ; 底墙
    lea eax, dword ptr ds : [g_MapDataArr]
    mov ebx, 19
    imul ebx, ebx, 20
    add eax, ebx
    mov ebx, dword ptr ds : [i]
    mov byte ptr ds : [eax + ebx] , 0bh
    ; 左墙
    lea eax, dword ptr ds : [g_MapDataArr]
    mov ebx, dword ptr ds : [i]
    imul ebx, ebx, 20
    mov byte ptr ds : [eax + ebx] , 0bh
    ; 右墙
    lea eax, dword ptr ds:[g_MapDataArr]
    mov ebx, dword ptr ds : [i]
    imul ebx, ebx, 20
    add ebx, 19
    mov byte ptr ds : [eax + ebx] , 0bh
    ; i 自减
    mov ebx, dword ptr ds : [i]
    inc ebx
    mov dword ptr ds : [i] , ebx
    loop set_wall
```

这也正是我代码中的函数 `setWall()` 的主要内容，稍有不同的是，在游戏中我设置的地图为 25 x 25 大小，并且在设置墙壁之前，我先把墙壁所在的内存给清空，清空的函数是 `initMapData()`
