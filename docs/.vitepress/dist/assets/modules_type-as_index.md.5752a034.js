import{_ as s,c as n,o as a,a as l}from"./app.6672c7b4.js";const F='{"title":"\u4ECB\u7ECD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u53EF\u5224\u65AD\u7684\u7C7B\u578B","slug":"\u53EF\u5224\u65AD\u7684\u7C7B\u578B"}],"relativePath":"modules/type-as/index.md","lastUpdated":1652177014000}',p={},e=l(`<h1 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h1><p>\u5F00\u53D1\u4E2D\u603B\u7ED3\u7684\u5E38\u7528\u6B63\u5219</p><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u4F7F\u7528npm</p><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">$ npm i @vill-v/type-as</span></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u7528yarn</p><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">$ yarn add @vill-v/type-as</span></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u7528pnpm</p><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">$ pnpm add @vill-v/type-as</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53EF\u5224\u65AD\u7684\u7C7B\u578B" tabindex="-1">\u53EF\u5224\u65AD\u7684\u7C7B\u578B <a class="header-anchor" href="#\u53EF\u5224\u65AD\u7684\u7C7B\u578B" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="line"><span style="color:#82AAFF;">isBoolean</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isError</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Error</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isFunction</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isMap</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Map</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isNil</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isNil</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isNull</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isObject</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">foor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isSet</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Set</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isString</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foor</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isSymbol</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Symbol</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isUndefined</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,11),o=[e];function c(r,t,A,i,C,y){return a(),n("div",null,o)}var d=s(p,[["render",c]]);export{F as __pageData,d as default};
