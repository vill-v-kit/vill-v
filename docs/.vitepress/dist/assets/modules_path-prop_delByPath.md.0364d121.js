import{_ as a,c as n,o as s,a as t}from"./app.6672c7b4.js";const _='{"title":"delByPath","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"DTS","slug":"dts"}],"relativePath":"modules/path-prop/delByPath.md","lastUpdated":1652177014000}',p={},e=t(`<h1 id="delbypath" tabindex="-1">delByPath <a class="header-anchor" href="#delbypath" aria-hidden="true">#</a></h1><p>\u901A\u8FC7\u4E00\u4E2A\u5B57\u7B26\u4E32\u8DEF\u5F84\u5220\u9664\u5BF9\u8C61\u503C</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>delByPath<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vill-v/path-prop&#39;</span>

<span class="token function">delByPath</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span>test<span class="token operator">:</span> <span class="token punctuation">{</span>foor<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;[0].test.foor&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; [{test: {}}]</span>
<span class="token function">delByPath</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span>test<span class="token operator">:</span> <span class="token punctuation">{</span>foor<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;foor&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; [{test: {}}]</span>
</code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">delByPath</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> path<span class="token operator">:</span> Path<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre></div>`,6),o=[e];function c(l,r,u,i,k,d){return s(),n("div",null,o)}var f=a(p,[["render",c]]);export{_ as __pageData,f as default};
