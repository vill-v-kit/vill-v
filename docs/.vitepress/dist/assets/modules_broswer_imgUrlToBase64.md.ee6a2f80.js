import{_ as s,c as a,o as l,a as n}from"./app.98eb0bf0.js";const C='{"title":"imgUrlToBase64","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"DTS","slug":"dts"}],"relativePath":"modules/broswer/imgUrlToBase64.md","lastUpdated":1652177014000}',o={name:"modules/broswer/imgUrlToBase64.md"},e=n(`<h1 id="imgurltobase64" tabindex="-1">imgUrlToBase64 <a class="header-anchor" href="#imgurltobase64" aria-hidden="true">#</a></h1><p>\u4E00\u4E2A\u56FE\u7247\u7F51\u5740 \u8F6C\u6362\u4E3A <code>data:base64</code></p><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u5185\u90E8\u4F7F\u7528 canvas \u5B9E\u73B0\uFF0C\u8BF7\u6CE8\u610F\u8DE8\u57DF\u548C\u56FE\u7247\u5927\u5C0F</p></div><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">imgUrlToBase64</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vill-v/broswer</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">imgUrlToBase64</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://**.com/logo.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">image/png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">imgUrlToBase64</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> mineType</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div>`,7),p=[e];function t(r,c,i,D,d,y){return l(),a("div",null,p)}var A=s(o,[["render",t]]);export{C as __pageData,A as default};