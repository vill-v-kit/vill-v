import{_ as a,c as n,o as s,a as t}from"./app.61e5eb8c.js";const _='{"title":"safeAwait","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"DTS","slug":"dts"}],"relativePath":"modules/async/safeAwait.md"}',e={},p=t(`<h1 id="safeawait" tabindex="-1">safeAwait <a class="header-anchor" href="#safeawait" aria-hidden="true">#</a></h1><p>\u5728\u4F7F\u7528 async await \u8BED\u6CD5\u7CD6\u65F6\uFF0C\u62E6\u622A\u9519\u8BEF</p><p>\u9002\u5408\u5728\u4E00\u4E9B\u8BF7\u6C42\u53D1\u751F\u9519\u8BEF\u65F6\uFF0C\u8FD8\u662F\u8981\u6267\u884C\u540E\u7EED\u65B9\u6CD5\u7684\u4E1A\u52A1</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">await</span> <span class="token function">safeAwait</span><span class="token punctuation">(</span><span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> <span class="token function">safeAwait</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code>
<span class="token comment">/**
 * \u5B89\u5168\u7684await
 * \u7528\u4E8E\u963B\u6B62await\u62A5\u9519\uFF0C\u5F71\u54CD\u540E\u7EED\u6D41\u7A0B
 * @param arg
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">safeAwait</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">safeAwait</span><span class="token punctuation">(</span><span class="token function-variable function">arg</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

</code></pre></div>`,7),o=[p];function c(i,l,r,u,k,d){return s(),n("div",null,o)}var h=a(e,[["render",c]]);export{_ as __pageData,h as default};
