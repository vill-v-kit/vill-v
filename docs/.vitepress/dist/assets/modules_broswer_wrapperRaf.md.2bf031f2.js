import{_ as n,c as a,o as s,a as p}from"./app.61e5eb8c.js";const m='{"title":"wrapperRaf","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":3,"title":"DTS","slug":"dts"}],"relativePath":"modules/broswer/wrapperRaf.md"}',t={},o=p(`<h1 id="wrapperraf" tabindex="-1">wrapperRaf <a class="header-anchor" href="#wrapperraf" aria-hidden="true">#</a></h1><p><code>requestAnimationFrame</code> \u7684\u5C01\u88C5</p><p>\u522B\u540D: <code>raf</code></p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>wrapperRaf<span class="token punctuation">,</span> getScroll<span class="token punctuation">,</span>raf<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vill-v/broswer&#39;</span>

<span class="token keyword">const</span> wrapperRaf1 <span class="token operator">=</span> <span class="token function">wrapperRaf</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getScroll</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> raf1 <span class="token operator">=</span> <span class="token function">raf</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getScroll</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">/**
 * \u53D6\u6D88\u6240\u6709\u56DE\u8C03
 */</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>wrapperRaf1<span class="token punctuation">.</span>ids<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>id <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  wrapperRaf1<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code>
<span class="token keyword">interface</span> <span class="token class-name">RafMap</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u5EF6\u8FDF\u6307\u5B9A\u5E27\u8C03\u7528requestAnimationFrame
 * @param callback
 * @param delayFrames \u5EF6\u8FDF\u7684\u5E27\u6570
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">wrapperRaf</span><span class="token punctuation">(</span><span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span> delayFrames<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">namespace</span> wrapperRaf <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token function-variable function">cancel</span><span class="token operator">:</span> <span class="token punctuation">(</span>pid<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> ids<span class="token operator">:</span> RafMap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7),e=[o];function c(l,u,r,i,k,d){return s(),a("div",null,e)}var w=n(t,[["render",c]]);export{m as __pageData,w as default};
