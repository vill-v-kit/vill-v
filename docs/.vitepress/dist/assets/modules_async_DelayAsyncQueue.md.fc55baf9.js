import{_ as n,c as s,o as a,a as t}from"./app.6672c7b4.js";const y='{"title":"DelayAsyncQueue","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"DTS","slug":"dts"}],"relativePath":"modules/async/DelayAsyncQueue.md","lastUpdated":1652119407000}',p={},o=t(`<h1 id="delayasyncqueue" tabindex="-1">DelayAsyncQueue <a class="header-anchor" href="#delayasyncqueue" aria-hidden="true">#</a></h1><p>\u6536\u96C6\u5F02\u6B65\u8BF7\u6C42\uFF0C\u4E0D\u7ACB\u523B\u6267\u884C\uFF0C\u5728\u9700\u8981\u6D88\u8D39\u5B83\u65F6\u5728\u6267\u884C</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> DelayAsyncQueue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vill-v/async&#39;</span>

<span class="token comment">// \u521D\u59CB\u5316</span>
<span class="token keyword">const</span> pool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DelayAsyncQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u65B0\u589E\u4E00\u4EFD\u8BF7\u6C42</span>
pool<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u6E05\u7A7A\u6574\u4E2A\u5E76\u53D1\u6C60</span>
pool<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u5E76\u53D1\u6C60\u5185\u90E8\u8BF7\u6C42\u6570\u91CF</span>
pool<span class="token punctuation">.</span>size

<span class="token comment">// \u5E76\u53D1\u6C60\u5185\u90E8\u8BF7\u6C42\u662F\u5426\u4E0D\u4E3A\u7A7A</span>
pool<span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u5E76\u53D1\u6C60\u5185\u90E8\u8BF7\u6C42\u662F\u5426\u4E3A\u7A7A</span>
pool<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u6D88\u8D39\u6240\u6709\u8BF7\u6C42</span>
pool<span class="token punctuation">.</span><span class="token function">consume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>res<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token comment">/**
 * \u5EF6\u8FDF\u6267\u884C\u7684\u5F02\u6B65\u8BF7\u6C42\u961F\u5217
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">class</span> <span class="token class-name">DelayAsyncQueue</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * \u65B0\u589E
     * @param asyncFn
     */</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token function-variable function">asyncFn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * \u8BBE\u7F6E\u961F\u5217
     * @param data
     */</span>
    <span class="token function">setQueue</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * \u6E05\u9664
     */</span>
    <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * \u83B7\u53D6\u8BF7\u6C42\u961F\u5217\u7684\u957F\u5EA6
     */</span>
    <span class="token keyword">get</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * \u662F\u5426\u4E0D\u4E3A\u7A7A
     */</span>
    <span class="token function">isNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * \u662F\u5426\u4E3A\u7A7A
     */</span>
    <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * \u6D88\u8D39
     */</span>
    <span class="token function">consume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),e=[o];function c(l,u,k,i,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{y as __pageData,f as default};
