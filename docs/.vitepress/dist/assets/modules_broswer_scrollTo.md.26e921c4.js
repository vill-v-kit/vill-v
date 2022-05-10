import{_ as n,c as s,o as a,a as t}from"./app.61e5eb8c.js";const _='{"title":"scrollTo","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"DTS","slug":"dts"}],"relativePath":"modules/broswer/scrollTo.md"}',o={},p=t(`<h1 id="scrollto" tabindex="-1">scrollTo <a class="header-anchor" href="#scrollto" aria-hidden="true">#</a></h1><p>\u5E26\u52A8\u753B\u7684\u7EB5\u5411\u6EDA\u52A8\u65B9\u6CD5</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>scrollTo<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vill-v/broswer&#39;</span>

<span class="token comment">// window \u6EDA\u52A8\u81F3100px</span>
<span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>

<span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u9ED8\u8BA4\u6EDA\u52A8\u8DDD\u79BB\uFF0C\u6A21\u5F0F\u662Fwindow</span>
  <span class="token function-variable function">getContainer</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6EDA\u52A8\u8FD4\u56DE\u51FD\u6570</span>
  <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u6EDA\u5B8C\u4E86&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6EDA\u52A8\u52A8\u753B\u6301\u7EED\u65F6\u95F4\uFF0C\u9ED8\u8BA4450</span>
  duration<span class="token operator">:</span> <span class="token number">200</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code>
<span class="token keyword">interface</span> <span class="token class-name">ScrollToOptions</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u9ED8\u8BA4\u6EDA\u52A8\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u662Fwindow</span>
  getContainer<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> HTMLElement <span class="token operator">|</span> Window <span class="token operator">|</span> Document<span class="token punctuation">;</span>
  <span class="token comment">// \u6EDA\u52A8\u8FD4\u56DE\u51FD\u6570</span>
  callback<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token comment">// \u6EDA\u52A8\u52A8\u753B\u6301\u7EED\u65F6\u95F4\uFF0C\u9ED8\u8BA4450</span>
  duration<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u6EDA\u52A8\u81F3\u7EB5\u5411\u8DDD\u79BB
 * @param y
 * @param options
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">scrollTo</span><span class="token punctuation">(</span>y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> ScrollToOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre></div>`,6),e=[p];function c(l,r,u,i,k,d){return a(),s("div",null,e)}var h=n(o,[["render",c]]);export{_ as __pageData,h as default};
