import{_ as e,o as s,c as n,V as a}from"./chunks/framework.8aae7694.js";const y=JSON.parse('{"title":"getBoundingClientRect","description":"","frontmatter":{},"headers":[],"relativePath":"modules/broswer/getBoundingClientRect.md","filePath":"modules/broswer/getBoundingClientRect.md","lastUpdated":1652177014000}'),t={name:"modules/broswer/getBoundingClientRect.md"},o=a('<h1 id="getboundingclientrect" tabindex="-1">getBoundingClientRect <a class="header-anchor" href="#getboundingclientrect" aria-label="Permalink to &quot;getBoundingClientRect&quot;">​</a></h1><p>获取元素的布局信息</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getBoundingClientRect</span><span style="color:#A6ACCD;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span></code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-label="Permalink to &quot;DTS&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getBoundingClientRect</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">element</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Element</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DOMRect</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">undefined</span><span style="color:#89DDFF;">;</span></span></code></pre></div>',6),l=[o];function p(c,r,i,d,C,u){return s(),n("div",null,l)}const g=e(t,[["render",p]]);export{y as __pageData,g as default};