import{_ as n,c as a,ae as p,o as t}from"./chunks/framework.BzDBnRMZ.js";const e="/assets/asp1.BqoMT1OP.png",l="/assets/asp2.Bubq1oGf.png",o="/assets/asp3.DQg3ep7P.png",i="/assets/asp4.CF5SIXDF.png",c="/assets/asp5.D3AjbJtL.png",r="/assets/asp6.Bi9Fpe5f.png",u="/assets/asp7.ek-BdQqW.png",q="/assets/asp8.BkBrWJJR.png",d="/assets/asp9.BTg6-mWl.png",g="/assets/asp10.CcErmMg3.png",m="/assets/asp11.Btv1Lfc5.png",h="/assets/asp12.I8QvNYdk.png",b="/assets/asp13.UkcGYcmT.png",B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/bit-life/asp.md","filePath":"docs/bit-life/asp.md"}'),_={name:"docs/bit-life/asp.md"};function f(v,s,O,D,x,C){return t(),a("div",null,s[0]||(s[0]=[p('<h2 id="修改-iis-配置-将错误信息发送到浏览器" tabindex="-1">修改 IIS 配置，将错误信息发送到浏览器 <a class="header-anchor" href="#修改-iis-配置-将错误信息发送到浏览器" aria-label="Permalink to &quot;修改 IIS 配置，将错误信息发送到浏览器&quot;">​</a></h2><p>此步骤非必要，但可以方便调试，故放在第一步</p><p>直接看图：</p><p><img src="'+e+'" alt=""></p><p><img src="'+l+'" alt=""></p><h2 id="创建数据库" tabindex="-1">创建数据库 <a class="header-anchor" href="#创建数据库" aria-label="Permalink to &quot;创建数据库&quot;">​</a></h2><p>首先创建数据库，打开你的 Access</p><p><img src="'+o+'" alt=""></p><p>然后选择保存类型、保存位置。这里选择 mdb 的原因，是因为我的电脑 accdb 类型会出错。</p><p><img src="'+i+'" alt=""></p><p>然后创建表并保存：</p><p><img src="'+c+`" alt=""></p><p>之后关闭数据库。</p><h2 id="编写asp文件连接数据库" tabindex="-1">编写asp文件连接数据库 <a class="header-anchor" href="#编写asp文件连接数据库" aria-label="Permalink to &quot;编写asp文件连接数据库&quot;">​</a></h2><p>我继续用 test.asp 文件做演示，在 asp 中拷贝下面的代码：(一个 <code>&#39;</code> 是 asp 中注释的写法)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;%</span></span>
<span class="line"><span>  set conn = Server.CreateObject(&quot;ADODB.Connection&quot;)</span></span>
<span class="line"><span>  conn.Provider = &quot;Microsoft.Jet.OLEDB.4.0&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &#39; 填写你创建的数据库绝对路径</span></span>
<span class="line"><span>  conn.Open(&quot;f:\\Website\\Database1.mdb&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  set rs = Server.CreateObject(&quot;ADODB.recordset&quot;)</span></span>
<span class="line"><span>  rs.Open &quot;select * from score&quot;, conn</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  do until rs.EOF</span></span>
<span class="line"><span>    for each x in rs.fields</span></span>
<span class="line"><span>      response.Write(x)</span></span>
<span class="line"><span>    next</span></span>
<span class="line"><span>    response.Write(&quot;&lt;br&gt;&quot;)</span></span>
<span class="line"><span>    rs.MoveNext</span></span>
<span class="line"><span>  loop</span></span>
<span class="line"><span>%&gt;</span></span></code></pre></div><p>在浏览器中输入你自己 test.asp 的路径，我输入的是：<code>http://localhost:8080/test.asp</code></p><p>应该可以看到：（对比之后看到正是数据库中的内容，证明数据库已经连接成功）</p><p><img src="`+r+'" alt=""></p><p>如果报错，可能是需要你修改IIS的配置，启用32位的配置，如下图：</p><p><img src="'+u+'" alt=""><img src="'+q+'" alt=""></p><h2 id="解释-asp-连接数据库的代码" tabindex="-1">解释 asp 连接数据库的代码 <a class="header-anchor" href="#解释-asp-连接数据库的代码" aria-label="Permalink to &quot;解释 asp 连接数据库的代码&quot;">​</a></h2><p>asp 中写代码默认使用的语言是 VBScript，它的具体语法我不是很熟，我只把各个部分的含义解释一下。如下图</p><p><img src="'+d+`" alt=""></p><h2 id="表格展示数据库中的内容" tabindex="-1">表格展示数据库中的内容 <a class="header-anchor" href="#表格展示数据库中的内容" aria-label="Permalink to &quot;表格展示数据库中的内容&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>  &lt;table width=&quot;100%&quot; border=&quot;1&quot;&gt;</span></span>
<span class="line"><span>  &lt;%</span></span>
<span class="line"><span>    set conn = Server.CreateObject(&quot;ADODB.Connection&quot;)</span></span>
<span class="line"><span>    conn.Provider = &quot;Microsoft.Jet.OLEDB.4.0&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39; 填写你创建的数据库绝对路径</span></span>
<span class="line"><span>    conn.Open(&quot;f:\\Website\\Database1.mdb&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    set rs = Server.CreateObject(&quot;ADODB.recordset&quot;)</span></span>
<span class="line"><span>    rs.Open &quot;select * from score&quot;, conn</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    do until rs.EOF</span></span>
<span class="line"><span>    response.Write(&quot;&lt;tr&gt;&quot;)</span></span>
<span class="line"><span>      for each x in rs.fields</span></span>
<span class="line"><span>        response.Write(&quot;&lt;td&gt;&quot;)</span></span>
<span class="line"><span>        response.Write(x)</span></span>
<span class="line"><span>        response.Write(&quot;&lt;/td&gt;&quot;)</span></span>
<span class="line"><span>      next</span></span>
<span class="line"><span>      rs.MoveNext</span></span>
<span class="line"><span>    response.Write(&quot;&lt;/tr&gt;&quot;)</span></span>
<span class="line"><span>    loop</span></span>
<span class="line"><span>  %&gt;</span></span>
<span class="line"><span>  &lt;/table&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>效果如下：</p><p><img src="`+g+`" alt=""></p><h2 id="极限更新-添加数据到数据库" tabindex="-1">极限更新，添加数据到数据库： <a class="header-anchor" href="#极限更新-添加数据到数据库" aria-label="Permalink to &quot;极限更新，添加数据到数据库：&quot;">​</a></h2><p>首先是 test.asp 文件的内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;form method=&quot;post&quot; action=&quot;table.asp&quot;&gt;</span></span>
<span class="line"><span>    请输入学生姓名:&lt;input name=&quot;stu_name&quot; type=&quot;text&quot;&gt;  &lt;br&gt;</span></span>
<span class="line"><span>    请输入学生班级:&lt;input name=&quot;stu_class&quot; type=&quot;text&quot;&gt; &lt;br&gt;</span></span>
<span class="line"><span>    请输入学生成绩:&lt;input name=&quot;stu_score&quot; type=&quot;text&quot;&gt;  &lt;br&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;submit&quot; value=&quot;提交&quot;&gt;</span></span>
<span class="line"><span>  &lt;/form&gt;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  &lt;table width=&quot;100%&quot; border=&quot;1&quot;&gt;</span></span>
<span class="line"><span>  &lt;%</span></span>
<span class="line"><span>    set conn = Server.CreateObject(&quot;ADODB.Connection&quot;)</span></span>
<span class="line"><span>    conn.Provider = &quot;Microsoft.Jet.OLEDB.4.0&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39; 填写你创建的数据库绝对路径</span></span>
<span class="line"><span>    conn.Open(&quot;f:\\Website\\Database1.mdb&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    set rs = Server.CreateObject(&quot;ADODB.recordset&quot;)</span></span>
<span class="line"><span>    rs.Open &quot;select * from score&quot;, conn</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    do until rs.EOF</span></span>
<span class="line"><span>    response.Write(&quot;&lt;tr&gt;&quot;)</span></span>
<span class="line"><span>      for each x in rs.fields</span></span>
<span class="line"><span>        response.Write(&quot;&lt;td&gt;&quot;)</span></span>
<span class="line"><span>        response.Write(x)</span></span>
<span class="line"><span>        response.Write(&quot;&lt;/td&gt;&quot;)</span></span>
<span class="line"><span>      next</span></span>
<span class="line"><span>      rs.MoveNext</span></span>
<span class="line"><span>    response.Write(&quot;&lt;/tr&gt;&quot;)</span></span>
<span class="line"><span>    loop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    conn.Close()</span></span>
<span class="line"><span>  %&gt;</span></span>
<span class="line"><span>  &lt;/table&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>然后是 table.asp 的内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;%</span></span>
<span class="line"><span>    set conn = Server.CreateObject(&quot;ADODB.Connection&quot;)</span></span>
<span class="line"><span>    conn.Provider = &quot;Microsoft.Jet.OLEDB.4.0&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39; 填写你创建的数据库绝对路径</span></span>
<span class="line"><span>    conn.Open(&quot;f:\\Website\\Database1.mdb&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39; sql插入数据表的例子如下：insert into score(stu_name, stu_class, stu_score) values(&#39;Mike&#39;, &#39;class1&#39;, &#39;100&#39;)</span></span>
<span class="line"><span>    sql = &quot;insert into score(stu_name, stu_class, stu_score) values&quot;</span></span>
<span class="line"><span>    sql = sql &amp; &quot;(&#39; &quot; &amp;Request.Form(&quot;stu_name&quot;)&amp; &quot;&#39;, &quot;</span></span>
<span class="line"><span>    sql = sql &amp; &quot; &#39; &quot; &amp;Request.Form(&quot;stu_class&quot;)&amp; &quot;&#39;, &quot;</span></span>
<span class="line"><span>    sql = sql &amp; &quot; &#39; &quot; &amp;Request.Form(&quot;stu_score&quot;)&amp; &quot; &#39;)&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    conn.Execute sql, recaffected</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    conn.Close()</span></span>
<span class="line"><span>%&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;a href=&quot;test.asp&quot;&gt;Go back to the previous page&lt;/a&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>效果如下：</p><p><img src="`+m+'" alt=""></p><p>首先是 test.asp 界面：</p><p><img src="'+h+'" alt=""></p><p>点击提交之后会跳转到 table.asp 界面：</p><p><img src="'+b+'" alt=""></p><p>然后点击链接返回 test.asp 界面，相当于刷新（临时写的，其实可以不那么麻烦），可以看到新记录已经插入到数据库了。</p>',40)]))}const P=n(_,[["render",f]]);export{B as __pageData,P as default};
