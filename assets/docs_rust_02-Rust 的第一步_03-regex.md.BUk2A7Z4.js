import{_ as a,c as e,ae as n,o as t}from"./chunks/framework.BzDBnRMZ.js";const _=JSON.parse('{"title":"正则表达式","description":"","frontmatter":{},"headers":[],"relativePath":"docs/rust/02-Rust 的第一步/03-regex.md","filePath":"docs/rust/02-Rust 的第一步/03-regex.md"}'),p={name:"docs/rust/02-Rust 的第一步/03-regex.md"};function l(r,s,o,i,c,u){return t(),e("div",null,s[0]||(s[0]=[n(`<h1 id="正则表达式" tabindex="-1">正则表达式 <a class="header-anchor" href="#正则表达式" aria-label="Permalink to &quot;正则表达式&quot;">​</a></h1><ul><li><code>replace_all()</code> 可以替换掉所有正则表达式匹配到的字符。</li></ul><div class="language-rust,ignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust,ignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>use regex::Regex;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let s: &amp;str = &quot;abcdefghijklmn&quot;;</span></span>
<span class="line"><span>    let re: Regex = Regex::new(r&quot;\\w&quot;).unwrap();</span></span>
<span class="line"><span>    let new_s: String = re.replace_all(s, &quot;-&quot;).to_string();</span></span>
<span class="line"><span>    print!(&quot;{}&quot;, new_s);</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,3)]))}const g=a(p,[["render",l]]);export{_ as __pageData,g as default};
