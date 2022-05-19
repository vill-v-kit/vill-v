import{_ as s,c as a,o as n,a as l}from"./app.6672c7b4.js";const C='{"title":"safeAwait","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"DTS","slug":"dts"}],"relativePath":"modules/async/safeAwait.md","lastUpdated":1652119407000}',o={},e=l(`<h1 id="safeawait" tabindex="-1">safeAwait <a class="header-anchor" href="#safeawait" aria-hidden="true">#</a></h1><p>\u5728\u4F7F\u7528 async await \u8BED\u6CD5\u7CD6\u65F6\uFF0C\u62E6\u622A\u9519\u8BEF</p><p>\u9002\u5408\u5728\u4E00\u4E9B\u8BF7\u6C42\u53D1\u751F\u9519\u8BEF\u65F6\uFF0C\u8FD8\u662F\u8981\u6267\u884C\u540E\u7EED\u65B9\u6CD5\u7684\u4E1A\u52A1</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">safeAwait</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reject</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">safeAwait</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reject</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span></code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * \u5B89\u5168\u7684await</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * \u7528\u4E8E\u963B\u6B62await\u62A5\u9519\uFF0C\u5F71\u54CD\u540E\u7EED\u6D41\u7A0B</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">arg</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">safeAwait</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">safeAwait</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">arg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,7),p=[e];function t(c,r,i,y,F,A){return n(),a("div",null,p)}var d=s(o,[["render",t]]);export{C as __pageData,d as default};
