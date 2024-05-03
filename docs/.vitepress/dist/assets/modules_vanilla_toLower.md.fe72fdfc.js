import{_ as s,o as a,c as o,X as l}from"./chunks/framework.7c15df5f.js";const A=JSON.parse('{"title":"toLower","description":"","frontmatter":{},"headers":[],"relativePath":"modules/vanilla/toLower.md","filePath":"modules/vanilla/toLower.md","lastUpdated":1652277345000}'),n={name:"modules/vanilla/toLower.md"},e=l(`<h1 id="tolower" tabindex="-1">toLower <a class="header-anchor" href="#tolower" aria-label="Permalink to &quot;toLower&quot;">​</a></h1><p>英文字符串小写</p><p>封装该方法只是为了防止值为<code>nil</code>时,<code>nil.toLowerCase()</code> 报错</p><p>您可以使用 <code>nil?.toLowerCase()</code>代替本方法</p><p>如果您确定值一定是字符串,请使用<code>&#39;&#39;.toLowerCase()</code></p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">toLower</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vill-v/vanilla</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">toLower</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//=&gt;&#39;&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toLower</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//=&gt;&#39;&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toLower</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ABC</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//=&gt; &#39;abc&#39;</span></span></code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-label="Permalink to &quot;DTS&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> toLower</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,9),t=[e];function p(c,r,i,y,D,d){return a(),o("div",null,t)}const F=s(n,[["render",p]]);export{A as __pageData,F as default};