import{_ as s,c as a,o,a as n}from"./app.814c76c9.js";const A=JSON.parse('{"title":"toLower","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"DTS","slug":"dts","link":"#dts","children":[]}],"relativePath":"modules/vanilla/toLower.md","lastUpdated":1652277345000}'),l={name:"modules/vanilla/toLower.md"},e=n(`<h1 id="tolower" tabindex="-1">toLower <a class="header-anchor" href="#tolower" aria-hidden="true">#</a></h1><p>\u82F1\u6587\u5B57\u7B26\u4E32\u5C0F\u5199</p><p>\u5C01\u88C5\u8BE5\u65B9\u6CD5\u53EA\u662F\u4E3A\u4E86\u9632\u6B62\u503C\u4E3A<code>nil</code>\u65F6,<code>nil.toLowerCase()</code> \u62A5\u9519</p><p>\u60A8\u53EF\u4EE5\u4F7F\u7528 <code>nil?.toLowerCase()</code>\u4EE3\u66FF\u672C\u65B9\u6CD5</p><p>\u5982\u679C\u60A8\u786E\u5B9A\u503C\u4E00\u5B9A\u662F\u5B57\u7B26\u4E32,\u8BF7\u4F7F\u7528<code>&#39;&#39;.toLowerCase()</code></p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">toLower</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vill-v/vanilla</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">toLower</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">//=&gt;&#39;&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toLower</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">//=&gt;&#39;&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toLower</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ABC</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">//=&gt; &#39;abc&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> toLower</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,9),p=[e];function t(c,r,d,i,D,y){return o(),a("div",null,p)}const F=s(l,[["render",t]]);export{A as __pageData,F as default};