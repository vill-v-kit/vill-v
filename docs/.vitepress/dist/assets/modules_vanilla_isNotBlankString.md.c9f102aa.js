import{_ as s,c as a,o as n,R as l}from"./chunks/framework.ec188369.js";const d=JSON.parse('{"title":"isBlankString","description":"","frontmatter":{},"headers":[],"relativePath":"modules/vanilla/isNotBlankString.md","lastUpdated":1652277345000}'),o={name:"modules/vanilla/isNotBlankString.md"},t=l(`<h1 id="isblankstring" tabindex="-1">isBlankString <a class="header-anchor" href="#isblankstring" aria-label="Permalink to &quot;isBlankString&quot;">​</a></h1><p>判断字符串是否为空</p><p>比起 <code>!&#39;&#39;</code> 以外 额外判断 <code>&#39;&#39;, &#39; &#39;, &#39;\\t&#39;, &#39;\\r&#39;, &#39;\\n&#39;, &#39;\\f&#39;, &#39;\\ufeff&#39;, &#39;\\u202a&#39;, &#39;\\u0000&#39;</code> 认为这些内容为空</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isNotBlankString</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vill-v/vanilla</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isNotBlankString</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\r\\n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// =&gt;false</span></span></code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-label="Permalink to &quot;DTS&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isNotBlankString</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">str</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">undefined</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">str</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,7),e=[t];function p(r,c,i,D,y,C){return n(),a("div",null,e)}const F=s(o,[["render",p]]);export{d as __pageData,F as default};
