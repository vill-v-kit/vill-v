import{_ as s,c as a,o as n,a as l}from"./app.46b0c4da.js";const h=JSON.parse('{"title":"isBlankChar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"DTS","slug":"dts","link":"#dts","children":[]}],"relativePath":"modules/vanilla/isBlankChar.md","lastUpdated":1652277345000}'),e={name:"modules/vanilla/isBlankChar.md"},o=l(`<h1 id="isblankchar" tabindex="-1">isBlankChar <a class="header-anchor" href="#isblankchar" aria-hidden="true">#</a></h1><p>判断单字符是否为空</p><p>比起 <code>!&#39;&#39;</code> 以外 额外判断 <code>&#39;&#39;, &#39; &#39;, &#39;\\t&#39;, &#39;\\r&#39;, &#39;\\n&#39;, &#39;\\f&#39;, &#39;\\ufeff&#39;, &#39;\\u202a&#39;, &#39;\\u0000&#39;</code> 认为这些内容为空</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isBlankChar</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vill-v/vanilla</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isBlankChar</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\r</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// =&gt;true</span></span>
<span class="line"></span></code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isBlankChar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,7),t=[o];function p(c,r,i,d,C,D){return n(),a("div",null,t)}const A=s(e,[["render",p]]);export{h as __pageData,A as default};
