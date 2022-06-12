import{_ as s,c as a,o as n,a as l}from"./app.98eb0bf0.js";const A='{"title":"isStringEquals","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"DTS","slug":"dts"}],"relativePath":"modules/vanilla/isStringEquals.md","lastUpdated":1652277345000}',o={name:"modules/vanilla/isStringEquals.md"},p=l(`<h1 id="isstringequals" tabindex="-1">isStringEquals <a class="header-anchor" href="#isstringequals" aria-hidden="true">#</a></h1><p>\u662F\u5426\u5FFD\u7565\u82F1\u6587\u5927\u5C0F\u5199 \u6BD4\u5BF9\u5B57\u7B26\u4E32\u662F\u5426\u76F8\u7B49</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isStringEquals</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vill-v/vanilla</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isStringEquals</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Xxxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//=&gt;false</span></span>
<span class="line"><span style="color:#82AAFF;">isStringEquals</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Xxxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//=&gt;true</span></span>
<span class="line"></span></code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isStringEquals</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> c2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ignoreCase</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,6),e=[p];function t(r,c,D,i,y,F){return n(),a("div",null,e)}var d=s(o,[["render",t]]);export{A as __pageData,d as default};
