import{_ as a,c as n,o as s,a as e}from"./app.6672c7b4.js";const h='{"title":"textEncode","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"DTS","slug":"dts"}],"relativePath":"modules/vanilla/textEncode.md","lastUpdated":1652277345000}',t={},o=e(`<h1 id="textencode" tabindex="-1">textEncode <a class="header-anchor" href="#textencode" aria-hidden="true">#</a></h1><p>\u6587\u672C\u8F6C\u4E8C\u8FDB\u5236\u6570\u7EC4 \u4EC5\u652F\u6301UTF-8</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> textEncode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vill-v/vanilla&#39;</span>

<span class="token function">textEncode</span><span class="token punctuation">(</span><span class="token string">&#39;xxxxx&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">textEncode</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Uint8Array <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre></div>`,6),c=[o];function p(r,d,l,i,u,k){return s(),n("div",null,c)}var x=a(t,[["render",p]]);export{h as __pageData,x as default};