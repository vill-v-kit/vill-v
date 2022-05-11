import{_ as n,c as a,o as s,a as e}from"./app.6672c7b4.js";const g='{"title":"isMatchInteger","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"DTS","slug":"dts"}],"relativePath":"modules/regexp-match/isMatchInteger.md","lastUpdated":1652177014000}',t={},o=e(`<h1 id="ismatchinteger" tabindex="-1">isMatchInteger <a class="header-anchor" href="#ismatchinteger" aria-hidden="true">#</a></h1><p>\u662F\u5426\u662F\u4E00\u4E2Aint\u5B57\u7B26\u4E32</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>isMatchInteger<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vill-v/regexp-match&#39;</span>

<span class="token comment">/**
 * \u662F\u5426\u4E3A\u4E00\u4E2A\u6574\u6570
 * &#39;01233&#39; -&gt; true
 * &#39;0.1&#39;-&gt;false
 * &#39;1true&#39;-&gt;false
 * 11111-&gt;true
 * 1.1 -&gt;false
 */</span>
<span class="token function">isMatchInteger</span><span class="token punctuation">(</span><span class="token string">&#39;01233&#39;</span><span class="token punctuation">)</span>

<span class="token function">isMatchInteger</span><span class="token punctuation">(</span><span class="token number">01233</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">isMatchInteger</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div>`,6),p=[o];function c(r,i,l,d,u,h){return s(),a("div",null,p)}var _=n(t,[["render",c]]);export{g as __pageData,_ as default};
