import{_ as a,c as i,ae as n,o as l}from"./chunks/framework.BzDBnRMZ.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/bit-life/snake/idiv.md","filePath":"docs/bit-life/snake/idiv.md"}'),t={name:"docs/bit-life/snake/idiv.md"};function p(e,s,h,k,d,E){return l(),i("div",null,s[0]||(s[0]=[n(`<p>本节介绍了如何利用 rand、srand 和 time 生成随机数，以及 idiv 指令和 cdq 指令的用法，然后通过这些知识，在墙壁范围内随机设置了食物的位置和蛇头的位置</p><h2 id="食物的位置设计思路" tabindex="-1">食物的位置设计思路 <a class="header-anchor" href="#食物的位置设计思路" aria-label="Permalink to &quot;食物的位置设计思路&quot;">​</a></h2><p>游戏开始时，食物会随机出现在墙壁内，当蛇吃下食物后，原本的食物消失且新的位置将会生成食物</p><p>关键问题在于，如何生成随机的食物，这个问题我们在 (3) 时会谈到</p><h2 id="蛇头的位置设计思路" tabindex="-1">蛇头的位置设计思路 <a class="header-anchor" href="#蛇头的位置设计思路" aria-label="Permalink to &quot;蛇头的位置设计思路&quot;">​</a></h2><p>和食物一样，蛇头的位置也应该是随机出现的，但应该和食物随机出现的位置不同。蛇头还要考虑到今后吃下食物之后，蛇会变长</p><p>我们使用一个结构体数组来存储蛇的位置</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SnakePos {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">globalSnakeArr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><p><code>globalSnakeArr[0]</code> 用来存储蛇头的坐标，至于吃到食物如何增长，以及蛇如何移动，我们之后再谈</p><h2 id="rand-srand-和-time" tabindex="-1">rand, srand 和 time <a class="header-anchor" href="#rand-srand-和-time" aria-label="Permalink to &quot;rand, srand 和 time&quot;">​</a></h2><p>在 C 语言的头文件 <code>stdlib.h</code> 中有一个函数 <code>rand()</code>，它可以返回一个范围在 <code>0</code> 到 <code>RAND_MAX</code> 的伪随机整数。</p><p>在调用 <code>rand()</code> 函数之前，可以使用 <code>srand()</code> 设置随机数种子，如果没有设置随机数种子，<code>rand()</code> 会自动设置随机数种子为 <code>1</code></p><blockquote><p><code>srand(unsigned seed)</code> 通过参数 <code>seed</code> 改变系统提供的种子值，从而可以使每次调用 <code>rand()</code> 函数生成的伪随机数序列不同，通常利用系统时间来改变系统的种子值，即 <code>srand(time(NULL))</code></p></blockquote><h2 id="idiv-指令" tabindex="-1">idiv 指令 <a class="header-anchor" href="#idiv-指令" aria-label="Permalink to &quot;idiv 指令&quot;">​</a></h2><p>假设墙壁是 20 × 20 的宽度，为了让食物出现在墙壁内，需要对生成的随机数取 20 的余数，这时候我们就需要使用一个指令 <code>idiv</code></p><blockquote><p>该指令只含有一个源操作符，该操作符作为除数使用。注意，它只能是寄存器或存储器操作数，不能是立即数。被除数必须实现放在隐含的寄存器中。可以实现 8 位、16 位、32 位带符号操作数除。</p><ul><li>若源操作数是 8 位，则被除数放在 AX 中，商在 AL 中，余数在 AH 中</li><li>若源操作数是 16 位，则被除数在 DX:AX 一对寄存器中，商在 AX 中，余数在 DX 中</li><li>若源操作数是 32 位，则被除数在 EDX:EAX 一对寄存器中，商在 EAX 中，余数在 EDX 中</li></ul><p>—— 《汇编语言与接口计数（李元章）》</p></blockquote><p>所以当使用好 idiv 指令之后，我们想要的余数就在 EDX 中</p><h2 id="实际代码" tabindex="-1">实际代码 <a class="header-anchor" href="#实际代码" aria-label="Permalink to &quot;实际代码&quot;">​</a></h2><p>这是生成食物的代码：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> generateRandomFood</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	__asm {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 获取时间	</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		push </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call time</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		add esp, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 设置随机数种子</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		push eax</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call srand</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		add esp, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 获取 x 坐标值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call rand</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		cdq</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov ecx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		idiv ecx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov dword ptr ds : [globalFoodX] , edx</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 获取 y 坐标值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call rand</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		cdq</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov ecx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		idiv ecx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov dword ptr ds : [globalFoodY] , edx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这是生成蛇头位置的代码：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setSnakePosition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	__asm {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	set_snake_pos:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call generateRandomSnakeHead</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		lea eax, dword ptr ds : [globalMapArr]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov ecx, dword ptr ds : [globalInitialSnakeHeadX]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		imul ecx, ecx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		add eax, ecx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov edx, dword ptr ds : [globalInitialSnakeHeadY]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		add eax, edx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov cl, byte ptr ds : [eax]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		cmp cl, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">B</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 如果和墙重叠, 则回到开始位置, 重新生成蛇头</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		je set_snake_pos</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 生成的蛇头满足要求, 则写入蛇的结构体</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		lea eax, dword ptr ds : [globalSnakeArr]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov ecx, dword ptr ds : [globalSnakeLen]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		imul ecx, ecx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		add eax, ecx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov ecx, dword ptr ds : [globalInitialSnakeHeadX]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov dword ptr ds : [eax] , ecx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov ecx, dword ptr ds : [globalInitialSnakeHeadY]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov dword ptr ds : [eax </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] , ecx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 设置蛇的长度为 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov dword ptr ds : [globalSnakeLen] , </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="cdq-指令" tabindex="-1">cdq 指令 <a class="header-anchor" href="#cdq-指令" aria-label="Permalink to &quot;cdq 指令&quot;">​</a></h2><p>上面的代码中出现了 cdq 指令</p><blockquote><p>双字扩展成四字指令 CDQ (Convert Double to Quad)</p><p>格式：CDQ</p><p>功能：把 EAX 寄存器中的符号位值扩展到 EDX 中</p><p>说明：80386 以上 CPU 支持此指令</p><p>—— 《汇编语言与接口计数（李元章）》</p></blockquote><p>在很久以前指令集规定除数必须是被除数的一半长，所以需要 CDQ 指令</p><p>经过我在 VS 2019 里面测试，不使用 CDQ 运行也是没有问题的</p>`,27)]))}const o=a(t,[["render",p]]);export{c as __pageData,o as default};
