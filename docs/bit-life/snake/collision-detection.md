本文是汇编贪吃蛇的最后一篇，简单介绍了如何进行碰撞检测

## 碰撞检测

碰撞检测其实包含两个部分：

- 检测蛇是否撞到墙壁
- 检测蛇是否吃到食物

这两部分都比较简单，由于贪吃蛇的特殊性，碰撞检测时只需要检测蛇头和墙壁、食物有没有重叠就好。其中墙壁的值为 `0bh`，而食物的值为 `0ch`，

碰撞检测代码如下：

```c
void judgeDetection() {
	int x;
	int y;
	__asm {
		// 取出蛇头的 xy 坐标
		lea eax, dword ptr ds : [globalSnakeArr]
		mov ecx, dword ptr ds : [eax]
		mov edx, dword ptr ds : [eax + 4]
		mov dword ptr ds : [x] , ecx
		mov dword ptr ds : [y] , edx

		// 是否撞墙
		lea eax, dword ptr ds : [globalMapArr]
		imul ecx, ecx, 25
		add eax, ecx
		add eax, edx
		// 从二维数组里面取指定下标值
		mov cl, byte ptr ds : [eax]

		// 判断是否撞墙
		cmp cl, 0bh
		je snake_dead


		// 判断是否吃到食物
		cmp cl, 0ch
		je snake_add_len

		// 啥都没做
		jmp fun_end

	snake_dead :
		call calculateScore

	snake_add_len :

		call addSnakeLen
		call initMapData
		call setWall
		call setFoodPosition

	fun_end :
		nop
	}
}
```

## 总结

写到这里，代码的主要难点我已经全部讲解了，至于翻译为纯汇编，并不是困难的事情，相信读者参照着我的代码，很快就能明白究竟是怎么翻译的

今天刚好是我们汇编大作业的展示，看到台上其他人的作品，真的是太强了，甚至有小组用汇编写出了 3D 的游戏，这样一对比说实话挺难受的

但毕竟是我投入了大量心血的作品，不甘心没给它一个结尾，现在不管结尾美不美好，它至少是有一个结局了

**如果你是北理工的同学，一定注意，光靠这个汇编贪吃蛇是无法立足的，如果最后大作业要展示，大佬的作品会超出你的想象**

**想要将这个贪吃蛇做得更加精美的话，可以看看在我队友添加亿点点之后的 super-snake.asm**

[assembly-snake | GitHub](https://github.com/lijunlin2022/assembly-snake)
