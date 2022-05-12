import{_ as n,c as s,o as a,a as t}from"./app.6672c7b4.js";const d='{"title":"toggle","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"DTS","slug":"dts"}],"relativePath":"modules/vanilla/toggle.md","lastUpdated":1652277345000}',p={},o=t(`<h1 id="toggle" tabindex="-1">toggle <a class="header-anchor" href="#toggle" aria-hidden="true">#</a></h1><p>\u5BF9 \u7C7B\u4F3C<code>bool</code>\u503C\u8FDB\u884C\u53D6\u53CD</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> toggle<span class="token punctuation">,</span> toggleBoolean<span class="token punctuation">,</span> toggleNumber<span class="token punctuation">,</span> toggleText <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vill-v/vanilla&#39;</span>

<span class="token function">toggle</span><span class="token punctuation">(</span><span class="token string">&#39;\u662F&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;\u5426&#39;</span>
<span class="token function">toggle</span><span class="token punctuation">(</span><span class="token string">&#39;\u662F&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u662F&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fasle&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;fasle&#39;</span>
<span class="token function">toggleText</span><span class="token punctuation">(</span><span class="token string">&#39;\u662F&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;\u5426&#39;</span>
<span class="token function">toggleText</span><span class="token punctuation">(</span><span class="token string">&#39;\u662F&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u662F&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fasle&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;fasle&#39;</span>

<span class="token function">toggle</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; 0</span>
<span class="token function">toggle</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// =&gt;2</span>
<span class="token function">toggleNumber</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; 0</span>
<span class="token function">toggleNumber</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// =&gt;2</span>

<span class="token function">toggle</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; false</span>
<span class="token function">toggleBoolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; false</span>
</code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token comment">/**
 * \u5207\u6362\u539F\u59CB\u5E03\u5C14\u503C
 * @param value
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">toggleBoolean</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token comment">/**
 * \u5207\u6362\u6570\u5B57\u578B
 * \u9ED8\u8BA41\u771F\uFF0C0\u5047
 * @param value
 * @param correct
 * @param error
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">toggleNumber</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> correct<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> error<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token comment">/**
 * \u5207\u6362\u6587\u5B57\u578B
 * \u9ED8\u8BA4&#39;\u662F&#39;\u771F\uFF0C&#39;\u5426&#39;\u5047
 * @param value
 * @param correct
 * @param error
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">toggleText</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> correct<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> error<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u5207\u6362\u771F\u5047string
 * \u9ED8\u8BA4&#39;\u662F&#39;\u771F\uFF0C&#39;\u5426&#39;\u5047
 * @param value
 * @param correct
 * @param error
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">toggle</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> correct<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> error<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token comment">/**
 * \u5207\u6362\u771F\u5047number
 * \u9ED8\u8BA41\u771F\uFF0C0\u5047
 * @param value
 * @param correct
 * @param error
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">toggle</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> correct<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> error<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token comment">/**
 * \u5207\u6362\u771F\u5047boolean
 * @param value
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">toggle</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div>`,6),e=[o];function c(l,r,u,k,i,g){return a(),s("div",null,e)}var b=n(p,[["render",c]]);export{d as __pageData,b as default};
