import{_ as a,c as i,ae as n,o as t}from"./chunks/framework.BzDBnRMZ.js";const e="/assets/snake1.BUfTT5fH.jpg",o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/bit-life/snake/exit-process.md","filePath":"docs/bit-life/snake/exit-process.md"}'),p={name:"docs/bit-life/snake/exit-process.md"};function l(h,s,k,r,c,d){return t(),i("div",null,s[0]||(s[0]=[n('<p>本节介绍了 ExitProcess() 函数，用以结束游戏</p><h2 id="回忆游戏流程" tabindex="-1">回忆游戏流程 <a class="header-anchor" href="#回忆游戏流程" aria-label="Permalink to &quot;回忆游戏流程&quot;">​</a></h2><p><img src="'+e+`" alt=""></p><h2 id="exitprocess" tabindex="-1">ExitProcess <a class="header-anchor" href="#exitprocess" aria-label="Permalink to &quot;ExitProcess&quot;">​</a></h2><p>调用 <code>ExitProcess()</code> 时，需要往函数中传入一个 <code>uExitCode</code>，代表该进程和所有线程的退出代码</p><p>直接传入 0，表示没有错误</p><p>它的头文件是 <code>windows.h</code>，</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> endGame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> endGameTip </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;程序在两秒钟之后即将退出......&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	__asm {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 打印提示信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov eax, dword ptr ds : [endGameTip]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		push eax</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call printf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		add esp, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 延时 2s</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		push </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call Sleep</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 退出</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		push </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call ExitProcess</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,8)]))}const g=a(p,[["render",l]]);export{o as __pageData,g as default};
