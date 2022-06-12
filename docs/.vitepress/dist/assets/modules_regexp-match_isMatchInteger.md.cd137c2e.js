import{_ as s,c as a,o as n,a as l}from"./app.98eb0bf0.js";const A='{"title":"isMatchInteger","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"DTS","slug":"dts"}],"relativePath":"modules/regexp-match/isMatchInteger.md","lastUpdated":1652177014000}',e={name:"modules/regexp-match/isMatchInteger.md"},t=l(`<h1 id="ismatchinteger" tabindex="-1">isMatchInteger <a class="header-anchor" href="#ismatchinteger" aria-hidden="true">#</a></h1><p>\u662F\u5426\u662F\u4E00\u4E2Aint\u5B57\u7B26\u4E32</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">isMatchInteger</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vill-v/regexp-match</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * \u662F\u5426\u4E3A\u4E00\u4E2A\u6574\u6570</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * &#39;01233&#39; -&gt; true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * &#39;0.1&#39;-&gt;false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * &#39;1true&#39;-&gt;false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 11111-&gt;true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 1.1 -&gt;false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#82AAFF;">isMatchInteger</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">01233</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isMatchInteger</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">01233</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isMatchInteger</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,6),p=[t];function o(c,r,i,y,D,d){return n(),a("div",null,p)}var F=s(e,[["render",o]]);export{A as __pageData,F as default};
