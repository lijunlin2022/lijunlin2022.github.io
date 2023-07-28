本节介绍了 ExitProcess() 函数，用以结束游戏

## 回忆游戏流程

![](./img/snake1.jpg)

## ExitProcess

调用 `ExitProcess()` 时，需要往函数中传入一个 `uExitCode`，代表该进程和所有线程的退出代码

直接传入 0，表示没有错误

它的头文件是 `windows.h`，

```c
void endGame() {
	const char* endGameTip = "程序在两秒钟之后即将退出......";
	__asm {
		// 打印提示信息
		mov eax, dword ptr ds : [endGameTip]
		push eax
		call printf
		add esp, 4

		// 延时 2s
		push 2000
		call Sleep

		// 退出
		push 0
		call ExitProcess
	}
}
```
