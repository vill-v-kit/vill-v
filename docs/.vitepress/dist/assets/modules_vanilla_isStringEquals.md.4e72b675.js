import{_ as s,c as n,o as a,a as t}from"./app.6672c7b4.js";const _='{"title":"isStringEquals","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"DTS","slug":"dts"}],"relativePath":"modules/vanilla/isStringEquals.md","lastUpdated":null}',e={},o=t(`<h1 id="isstringequals" tabindex="-1">isStringEquals <a class="header-anchor" href="#isstringequals" aria-hidden="true">#</a></h1><p>\u662F\u5426\u5FFD\u7565\u82F1\u6587\u5927\u5C0F\u5199 \u6BD4\u5BF9\u5B57\u7B26\u4E32\u662F\u5426\u76F8\u7B49</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> isStringEquals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vill-v/vanilla&#39;</span>

<span class="token function">isStringEquals</span><span class="token punctuation">(</span><span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Xxxx&#39;</span><span class="token punctuation">)</span> <span class="token comment">//=&gt;false</span>
<span class="token function">isStringEquals</span><span class="token punctuation">(</span><span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Xxxx&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//=&gt;true</span>
</code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">isStringEquals</span><span class="token operator">:</span> <span class="token punctuation">(</span>c1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> c2<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> ignoreCase<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div>`,6),p=[o];function c(l,i,r,u,d,k){return a(),n("div",null,p)}var h=s(e,[["render",c]]);export{_ as __pageData,h as default};
