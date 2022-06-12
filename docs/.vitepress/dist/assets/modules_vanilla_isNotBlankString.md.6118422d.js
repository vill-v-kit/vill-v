import{_ as s,c as a,o as n,a as l}from"./app.98eb0bf0.js";const A='{"title":"isBlankString","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"DTS","slug":"dts"}],"relativePath":"modules/vanilla/isNotBlankString.md","lastUpdated":1652277345000}',o={name:"modules/vanilla/isNotBlankString.md"},e=l(`<h1 id="isblankstring" tabindex="-1">isBlankString <a class="header-anchor" href="#isblankstring" aria-hidden="true">#</a></h1><p>\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u4E3A\u7A7A</p><p>\u6BD4\u8D77 <code>!&#39;&#39;</code> \u4EE5\u5916 \u989D\u5916\u5224\u65AD <code>&#39;&#39;, &#39; &#39;, &#39;\\t&#39;, &#39;\\r&#39;, &#39;\\n&#39;, &#39;\\f&#39;, &#39;\\ufeff&#39;, &#39;\\u202a&#39;, &#39;\\u0000&#39;</code> \u8BA4\u4E3A\u8FD9\u4E9B\u5185\u5BB9\u4E3A\u7A7A</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isNotBlankString</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vill-v/vanilla</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isNotBlankString</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\r\\n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// =&gt;false</span></span>
<span class="line"></span></code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isNotBlankString</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">undefined</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,7),p=[e];function t(r,c,i,D,y,d){return n(),a("div",null,p)}var F=s(o,[["render",t]]);export{A as __pageData,F as default};
