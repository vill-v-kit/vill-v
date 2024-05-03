import{_ as s,o as a,c as n,X as e}from"./chunks/framework.7c15df5f.js";const A=JSON.parse('{"title":"textEncode","description":"","frontmatter":{},"headers":[],"relativePath":"modules/vanilla/textEncode.md","filePath":"modules/vanilla/textEncode.md","lastUpdated":1652277345000}'),o={name:"modules/vanilla/textEncode.md"},l=e(`<h1 id="textencode" tabindex="-1">textEncode <a class="header-anchor" href="#textencode" aria-label="Permalink to &quot;textEncode&quot;">​</a></h1><p>文本转二进制数组 仅支持UTF-8</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">textEncode</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vill-v/vanilla</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">textEncode</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-label="Permalink to &quot;DTS&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> textEncode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Uint8Array</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,6),t=[l];function p(c,r,i,d,D,y){return a(),n("div",null,t)}const F=s(o,[["render",p]]);export{A as __pageData,F as default};