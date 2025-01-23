import{_ as a,c as i,ae as n,o as l}from"./chunks/framework.BzDBnRMZ.js";const r=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/bit-life/snake/collision-detection.md","filePath":"docs/bit-life/snake/collision-detection.md"}'),t={name:"docs/bit-life/snake/collision-detection.md"};function p(e,s,h,k,E,d){return l(),i("div",null,s[0]||(s[0]=[n(`<p>本文是汇编贪吃蛇的最后一篇，简单介绍了如何进行碰撞检测</p><h2 id="碰撞检测" tabindex="-1">碰撞检测 <a class="header-anchor" href="#碰撞检测" aria-label="Permalink to &quot;碰撞检测&quot;">​</a></h2><p>碰撞检测其实包含两个部分：</p><ul><li>检测蛇是否撞到墙壁</li><li>检测蛇是否吃到食物</li></ul><p>这两部分都比较简单，由于贪吃蛇的特殊性，碰撞检测时只需要检测蛇头和墙壁、食物有没有重叠就好。其中墙壁的值为 <code>0bh</code>，而食物的值为 <code>0ch</code>，</p><p>碰撞检测代码如下：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> judgeDetection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	__asm {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 取出蛇头的 xy 坐标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		lea eax, dword ptr ds : [globalSnakeArr]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov ecx, dword ptr ds : [eax]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov edx, dword ptr ds : [eax </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov dword ptr ds : [x] , ecx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov dword ptr ds : [y] , edx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 是否撞墙</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		lea eax, dword ptr ds : [globalMapArr]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		imul ecx, ecx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		add eax, ecx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		add eax, edx</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 从二维数组里面取指定下标值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mov cl, byte ptr ds : [eax]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 判断是否撞墙</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		cmp cl, </span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">0bh</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		je snake_dead</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 判断是否吃到食物</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		cmp cl, </span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">0ch</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		je snake_add_len</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 啥都没做</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		jmp fun_end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	snake_dead :</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call calculateScore</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	snake_add_len :</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call addSnakeLen</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call initMapData</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call setWall</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		call setFoodPosition</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	fun_end :</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		nop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>写到这里，代码的主要难点我已经全部讲解了，至于翻译为纯汇编，并不是困难的事情，相信读者参照着我的代码，很快就能明白究竟是怎么翻译的</p><p>今天刚好是我们汇编大作业的展示，看到台上其他人的作品，真的是太强了，甚至有小组用汇编写出了 3D 的游戏，这样一对比说实话挺难受的</p><p>但毕竟是我投入了大量心血的作品，不甘心没给它一个结尾，现在不管结尾美不美好，它至少是有一个结局了</p><p><strong>如果你是北理工的同学，一定注意，光靠这个汇编贪吃蛇是无法立足的，如果最后大作业要展示，大佬的作品会超出你的想象</strong></p><p><strong>想要将这个贪吃蛇做得更加精美的话，可以看看在我队友添加亿点点之后的 super-snake.asm</strong></p><p><a href="https://github.com/lijunlin2022/assembly-snake" target="_blank" rel="noreferrer">assembly-snake | GitHub</a></p>`,14)]))}const o=a(t,[["render",p]]);export{r as __pageData,o as default};
