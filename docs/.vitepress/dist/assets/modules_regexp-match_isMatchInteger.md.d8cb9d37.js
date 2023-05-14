import{_ as s,o as a,c as n,V as l}from"./chunks/framework.8aae7694.js";const A=JSON.parse('{"title":"isMatchInteger","description":"","frontmatter":{},"headers":[],"relativePath":"modules/regexp-match/isMatchInteger.md","filePath":"modules/regexp-match/isMatchInteger.md","lastUpdated":1652177014000}'),e={name:"modules/regexp-match/isMatchInteger.md"},t=l(`<h1 id="ismatchinteger" tabindex="-1">isMatchInteger <a class="header-anchor" href="#ismatchinteger" aria-label="Permalink to &quot;isMatchInteger&quot;">​</a></h1><p>是否是一个int字符串</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">isMatchInteger</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vill-v/regexp-match</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 是否为一个整数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * &#39;01233&#39; -&gt; true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * &#39;0.1&#39;-&gt;false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * &#39;1true&#39;-&gt;false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 11111-&gt;true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 1.1 -&gt;false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#82AAFF;">isMatchInteger</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">01233</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isMatchInteger</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">01233</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-label="Permalink to &quot;DTS&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isMatchInteger</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,6),o=[t];function p(c,r,i,y,D,C){return a(),n("div",null,o)}const d=s(e,[["render",p]]);export{A as __pageData,d as default};