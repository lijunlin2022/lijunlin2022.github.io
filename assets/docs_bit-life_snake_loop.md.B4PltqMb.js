import{_ as a,c as n,ae as i,o as p}from"./chunks/framework.BzDBnRMZ.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/bit-life/snake/loop.md","filePath":"docs/bit-life/snake/loop.md"}'),l={name:"docs/bit-life/snake/loop.md"};function e(t,s,h,k,r,d){return p(),n("div",null,s[0]||(s[0]=[i(`<p>本文介绍了游戏中的地图设计：20 x 20 的数组，其中数组的四边都设置为墙壁。为了更清晰简明地介绍实现方法，采用了先写 C 语言代码，再使用汇编语言实现的办法</p><h2 id="地图设计" tabindex="-1">地图设计 <a class="header-anchor" href="#地图设计" aria-label="Permalink to &quot;地图设计&quot;">​</a></h2><p>我们的地图设计为 20 x 20 的数组，其中四面都是墙</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#################### // 如果使用 C 语言，则表示为</span></span>
<span class="line"><span>#..................# // char g_MapDataArr[20][20];</span></span>
<span class="line"><span>#..................# // 如果将空白设置为 0，墙设置为 0bh</span></span>
<span class="line"><span>#..................# // 顶墙 g_MapDataArr[0][0-19] = 0bh</span></span>
<span class="line"><span>#..................# // 底墙 g_MapDataArr[19][0-19] = 0bh</span></span>
<span class="line"><span>#..................# // 左墙 g_MapDataArr[0-19][0] = 0bh</span></span>
<span class="line"><span>#..................# // 右墙 g_MapDataArr[0-19][19] = 0bh</span></span>
<span class="line"><span>#..................#</span></span>
<span class="line"><span>#..................#</span></span>
<span class="line"><span>#..................#</span></span>
<span class="line"><span>#..................#</span></span>
<span class="line"><span>#..................#</span></span>
<span class="line"><span>#..................#</span></span>
<span class="line"><span>#..................#</span></span>
<span class="line"><span>#..................#</span></span>
<span class="line"><span>#..................#</span></span>
<span class="line"><span>#..................#</span></span>
<span class="line"><span>#..................#</span></span>
<span class="line"><span>#..................#</span></span>
<span class="line"><span>####################</span></span></code></pre></div><p>关键问题在于：在汇编中我们如何表示二维数组呢？</p><h2 id="汇编表示二维数组" tabindex="-1">汇编表示二维数组 <a class="header-anchor" href="#汇编表示二维数组" aria-label="Permalink to &quot;汇编表示二维数组&quot;">​</a></h2><p>内存是线性排列的，相当于一维数组，我们要做的就是将一维数组加以变化后模拟二维数组</p><p>假如我们申请 <code>char arr[400]</code>，要想用它模拟二维数组，则</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>######################### // char arr[0-19]</span></span>
<span class="line"><span>#.......................# // char arr[20-39]</span></span>
<span class="line"><span>#.......................# // char arr[40-59]</span></span>
<span class="line"><span>#.......................# // char arr[60-79]</span></span>
<span class="line"><span>.........................</span></span>
<span class="line"><span>#.......................# // char arr[260-379]</span></span>
<span class="line"><span>######################### // char arr[280-399]</span></span></code></pre></div><p>而如果我们想要访问 <code>char g_MapDataArr[3][12]</code> 时，我们该如何模拟呢？</p><p>我们应该用 <code>char arr[3 * 20 + 12]</code> 来模拟</p><p>现在我们来利用汇编，将 <code>char g_MapDataArr[3][12]</code> 设置为 0bh</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>char g_MapDataArr[3][12];</span></span>
<span class="line"><span>void InitGameMapData() {</span></span>
<span class="line"><span>  __asm {</span></span>
<span class="line"><span>    // 初始化 g_MapDataArr 内容全部为 0</span></span>
<span class="line"><span>    // 调用了 memset 函数</span></span>
<span class="line"><span>    push 400</span></span>
<span class="line"><span>    push 0</span></span>
<span class="line"><span>    lea eax, dword ptr ds:[g_MapDataArr]</span></span>
<span class="line"><span>    push eax</span></span>
<span class="line"><span>    call memset</span></span>
<span class="line"><span>    add esp, 12</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    lea eax, dword ptr ds:[g_MapDataArr]	// 获得 g_MapDataArr[0][0] 的地址</span></span>
<span class="line"><span>    mov ecx, 72								// 72 = 20 + 20 + 20 + 12</span></span>
<span class="line"><span>    mov byte ptr ds:[eax + ecx], 0bh		// 给 g_MapDataArr[3][12] 赋值</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="结合循环" tabindex="-1">结合循环 <a class="header-anchor" href="#结合循环" aria-label="Permalink to &quot;结合循环&quot;">​</a></h2><p>在上一节中，我们使用了 <code>mov byte ptr ds:[eax + ecx], 1</code> 来完成赋值</p><p>如果我们将 ecx 设置为变量，在一个循环里面对 ecx 加 1，不就可以完整地对某一行或者某一列进行赋值了吗？</p><p>这正是我们的思路，利用变量结合循环给墙壁赋值</p><p>用 C 语言表述如下</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 19</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    g_MapDataArr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 顶墙</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    g_MapDataArr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">19</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 底墙</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    g_MapDataArr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 左墙</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    g_MapDataArr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">19</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 右墙</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>下面我们来学习汇编的 loop 循环</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  mov ecx, 5</span></span>
<span class="line"><span>目标地址:</span></span>
<span class="line"><span>  代码</span></span>
<span class="line"><span>  loop 目标地址</span></span></code></pre></div><blockquote><p>loop 指令的执行包含两部，首先，ecx 减 1，接着与 0 相比较，如果 ecx 不等于 0，则跳转到目的地址（表好处）；如果 ecx 等于 0，则不妨生跳转，执行后面的语句。</p></blockquote><p>可以看到，loop 循环和我们之前的 C 语言代码逻辑不太一致，我们可以将 C 代码修改一下，使它符合 loop 循环的逻辑</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    g_MapDataArr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 顶墙</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    g_MapDataArr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">19</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 底墙</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    g_MapDataArr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 左墙</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    g_MapDataArr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">19</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 右墙</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>与之对应的汇编语句为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>; 使用循环设置地图的边界</span></span>
<span class="line"><span>    mov dword ptr ds : [i] , 0</span></span>
<span class="line"><span>    mov ecx, 20;</span></span>
<span class="line"><span>set_wall:</span></span>
<span class="line"><span>    ; 顶墙</span></span>
<span class="line"><span>    lea eax, dword ptr ds : [g_MapDataArr]</span></span>
<span class="line"><span>    mov ebx, dword ptr ds : [i]</span></span>
<span class="line"><span>    mov byte ptr ds : [eax + ebx] , 0bh</span></span>
<span class="line"><span>    ; 底墙</span></span>
<span class="line"><span>    lea eax, dword ptr ds : [g_MapDataArr]</span></span>
<span class="line"><span>    mov ebx, 19</span></span>
<span class="line"><span>    imul ebx, ebx, 20</span></span>
<span class="line"><span>    add eax, ebx</span></span>
<span class="line"><span>    mov ebx, dword ptr ds : [i]</span></span>
<span class="line"><span>    mov byte ptr ds : [eax + ebx] , 0bh</span></span>
<span class="line"><span>    ; 左墙</span></span>
<span class="line"><span>    lea eax, dword ptr ds : [g_MapDataArr]</span></span>
<span class="line"><span>    mov ebx, dword ptr ds : [i]</span></span>
<span class="line"><span>    imul ebx, ebx, 20</span></span>
<span class="line"><span>    mov byte ptr ds : [eax + ebx] , 0bh</span></span>
<span class="line"><span>    ; 右墙</span></span>
<span class="line"><span>    lea eax, dword ptr ds:[g_MapDataArr]</span></span>
<span class="line"><span>    mov ebx, dword ptr ds : [i]</span></span>
<span class="line"><span>    imul ebx, ebx, 20</span></span>
<span class="line"><span>    add ebx, 19</span></span>
<span class="line"><span>    mov byte ptr ds : [eax + ebx] , 0bh</span></span>
<span class="line"><span>    ; i 自减</span></span>
<span class="line"><span>    mov ebx, dword ptr ds : [i]</span></span>
<span class="line"><span>    inc ebx</span></span>
<span class="line"><span>    mov dword ptr ds : [i] , ebx</span></span>
<span class="line"><span>    loop set_wall</span></span></code></pre></div><p>这也正是我代码中的函数 <code>setWall()</code> 的主要内容，稍有不同的是，在游戏中我设置的地图为 25 x 25 大小，并且在设置墙壁之前，我先把墙壁所在的内存给清空，清空的函数是 <code>initMapData()</code></p>`,27)]))}const g=a(l,[["render",e]]);export{E as __pageData,g as default};
