import{_ as s,c as a,o as n,a as e}from"./app.e5e9db69.js";const A=JSON.parse('{"title":"isMatchInteger","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"DTS","slug":"dts","link":"#dts","children":[]}],"relativePath":"modules/regexp-match/isMatchInteger.md","lastUpdated":1652177014000}'),l={name:"modules/regexp-match/isMatchInteger.md"},p=e(`<h1 id="ismatchinteger" tabindex="-1">isMatchInteger <a class="header-anchor" href="#ismatchinteger" aria-hidden="true">#</a></h1><p>\u662F\u5426\u662F\u4E00\u4E2Aint\u5B57\u7B26\u4E32</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">isMatchInteger</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vill-v/regexp-match</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * \u662F\u5426\u4E3A\u4E00\u4E2A\u6574\u6570</span></span>
<span class="line"><span style="color:#676E95;"> * &#39;01233&#39; -&gt; true</span></span>
<span class="line"><span style="color:#676E95;"> * &#39;0.1&#39;-&gt;false</span></span>
<span class="line"><span style="color:#676E95;"> * &#39;1true&#39;-&gt;false</span></span>
<span class="line"><span style="color:#676E95;"> * 11111-&gt;true</span></span>
<span class="line"><span style="color:#676E95;"> * 1.1 -&gt;false</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#82AAFF;">isMatchInteger</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">01233</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isMatchInteger</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">01233</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isMatchInteger</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,6),o=[p];function t(c,r,i,D,y,d){return n(),a("div",null,o)}const h=s(l,[["render",t]]);export{A as __pageData,h as default};
