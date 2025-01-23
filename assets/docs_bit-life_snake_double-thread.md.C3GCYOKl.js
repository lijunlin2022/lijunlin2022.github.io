import{_ as i,c as a,ae as n,o as t}from"./chunks/framework.BzDBnRMZ.js";const l="/assets/snake5.F_QNNv1p.jpg",o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/bit-life/snake/double-thread.md","filePath":"docs/bit-life/snake/double-thread.md"}'),p={name:"docs/bit-life/snake/double-thread.md"};function e(h,s,k,E,r,d){return t(),a("div",null,s[0]||(s[0]=[n('<p>本文介绍了游戏中如何使用双线程，完成获取键盘输入控制贪吃蛇移动，为此我们需要学习两个函数，CreateThread 和 GetAsyncKeyState</p><h2 id="双线程的作用" tabindex="-1">双线程的作用 <a class="header-anchor" href="#双线程的作用" aria-label="Permalink to &quot;双线程的作用&quot;">​</a></h2><p><img src="'+l+`" alt=""></p><p>在我们的设计中，开了两个线程，第一个线程用于获取键盘输入，它将影响一个全局变量 <code>globalMovementDirection</code> ，当需要移动蛇的时候，第二个线程将读取 <code>globalMovementDirection</code> 作为控制信号</p><h2 id="createthread-的用法" tabindex="-1">CreateThread 的用法 <a class="header-anchor" href="#createthread-的用法" aria-label="Permalink to &quot;CreateThread 的用法&quot;">​</a></h2><blockquote><ul><li><p>语法</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HANDLE </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CreateThread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  LPSECURITY_ATTRIBUTES </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">lpsa</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DWORD </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">cbStack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  LPTHREAD_START_ROUTINE </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">lpStartAddr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  LPVOID </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">lpvThreadParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DWORD </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fdwCreate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  LPDWORD lpIDThread</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></li><li><p>参数</p><ul><li>lpsa，忽略，必须为 NULL</li><li>cbStack，忽略</li><li>lpStartAddr，线程的起始地址</li><li>lpvThreadParam，指向传递给线程的单个 32 位参数值的长指针</li><li>fdwCreate，执行控制线程创建的标志</li><li>lpIDThread，指向接收线程标识符的 32 位变量的长指针，如果此参数为 NULL，则不反悔线程标识符</li></ul></li></ul><p>——<a href="https://docs.microsoft.com/en-us/previous-versions/bb202727(v=msdn.10)?redirectedfrom=MSDN" target="_blank" rel="noreferrer">CreateThread | Microsoft Docs</a></p></blockquote><h2 id="实际创建线程的代码" tabindex="-1">实际创建线程的代码 <a class="header-anchor" href="#实际创建线程的代码" aria-label="Permalink to &quot;实际创建线程的代码&quot;">​</a></h2><p>在 <code>main</code> 函数中，我们有：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	__asm {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 第一个线程</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 获取键盘输入</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 操控蛇的移动</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		push </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		push </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		push </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		lea eax, dword ptr ds : [judgeMovementDirection]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		push eax</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		push </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		push </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call CreateThread</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 第二个线程</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 打印游戏画面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call enterGame</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>可以知道，第一个线程中就只有函数 <code>judgeMovementDirection</code> 在运行，而 <code>judgeMovementDirection</code> 就是的功能就是修改 <code>globalMovementDirection</code> 变量</p><h2 id="getasynckeystate" tabindex="-1">GetAsyncKeyState <a class="header-anchor" href="#getasynckeystate" aria-label="Permalink to &quot;GetAsyncKeyState&quot;">​</a></h2><blockquote><p>GetAsyncKeyState 是一个用来判断函数调用时指定虚拟键的状态，确定用户当前是否按下了键盘的一个键的函数。如果按下，则返回值最高位为 1</p><ul><li><p>语法</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SHORT </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetAsyncKeyState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vKey</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></li><li><p>参数</p><ul><li><p><code>vKey</code></p><p>有关详细信息，请参阅<a href="https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes" target="_blank" rel="noreferrer">虚拟键代码</a></p></li></ul></li></ul><p>对 GetAsyncKeyState 调用之后，如果按键已经被按下，则返回值位 15 设为 1；如抬起，则为 0</p><p>—— <a href="https://baike.baidu.com/item/GetAsyncKeyState/918387?fr=aladdin" target="_blank" rel="noreferrer">GetAsyncKeyState 百度百科</a></p><p>—— <a href="https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getasynckeystate" target="_blank" rel="noreferrer">GetAsyncKeyState | Microsoft Docs</a></p></blockquote><h2 id="实际判断状态的代码" tabindex="-1">实际判断状态的代码 <a class="header-anchor" href="#实际判断状态的代码" aria-label="Permalink to &quot;实际判断状态的代码&quot;">​</a></h2><p>需要注意的时，贪吃蛇不能够直接掉头，所以在给 <code>globalMovementDirection</code> 赋值时，必须首先判断此时蛇的移动方向</p><ul><li>如果蛇向下移动，则向上的按键不生效</li><li>如果蛇向上移动，则向下的按键不生效</li><li>如果蛇向左移动，则向右的按键不生效</li><li>如果蛇向右移动，则向左的按键不生效</li></ul><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  judgeMovementDirection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		__asm {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	back_while:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 获取 w 键</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		push </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">87</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call GetAsyncKeyState</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 与操作，获取第 15 位的值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		and ax, </span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">0ff00h</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 如果为 0 表示没有被按下</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		cmp ax, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		jne w_press</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 获取 s 键</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		push </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">83</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call GetAsyncKeyState</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		and ax, </span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">0ff00h</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		cmp ax, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		jne s_press</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 获取 a 键</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		push </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">65</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call GetAsyncKeyState</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		and ax, </span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">0ff00h</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		cmp ax, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		jne a_press</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 获取 d 键</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		push </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">68</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call GetAsyncKeyState</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		and ax, </span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">0ff00h</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		cmp ax, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		jne d_press</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		jmp back_while</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 如果 w 键被按下</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	w_press :</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov eax, dword ptr ds : [globalMovementDirection]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 如果当前移动方向向下, 则忽略此次事件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		cmp eax, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		je w_back</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov dword ptr ds : [globalMovementDirection] , </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		w_back :</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		jmp back_while</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 如果 s 键被按下</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	s_press :</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov eax, dword ptr ds : [globalMovementDirection]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 如果当前移动方向向上, 则忽略此次事件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		cmp eax, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		je s_back</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov dword ptr ds : [globalMovementDirection] , </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		s_back :</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		jmp back_while</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 如果 a 键被按下</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	a_press :</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov eax, dword ptr ds : [globalMovementDirection]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 如果当前移动方向向右, 则忽略此次事件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		cmp eax, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		je a_back</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov dword ptr ds : [globalMovementDirection] , </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		a_back :</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		jmp back_while</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 如果 d 键被按下</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	d_press :</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov eax, dword ptr ds : [globalMovementDirection]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 如果当前移动方向向左, 则忽略此次事件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		cmp eax, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		je d_back</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov dword ptr ds : [globalMovementDirection] , </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		d_back :</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		jmp back_while</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,16)]))}const g=i(p,[["render",e]]);export{o as __pageData,g as default};
