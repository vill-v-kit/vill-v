import{_ as n,c as s,o as a,a as p}from"./app.6672c7b4.js";const y='{"title":"asyncPool","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"DTS","slug":"dts"}],"relativePath":"modules/async/AsyncPool.md","lastUpdated":1652119407000}',t={},o=p(`<h1 id="asyncpool" tabindex="-1">asyncPool <a class="header-anchor" href="#asyncpool" aria-hidden="true">#</a></h1><p>\u5F02\u6B65\u5E76\u53D1\u6570\u91CF\u63A7\u5236\u5668</p><p>\u4E3A\u4E86\u89E3\u51B3\u4E00\u6B21\u6027\u53D1\u9001\u8FC7\u591A\u5E76\u53D1\u8BF7\u6C42\uFF0C\u5C06\u6D4F\u89C8\u5668\u5361\u6B7B\u7684\u95EE\u9898 <br>\u5C06\u6240\u6709\u8BF7\u6C42\u5207\u7247\u5E76\u53D1</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AsyncPool <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vill-v/async&#39;</span>

<span class="token comment">// \u521D\u59CB\u5316</span>
<span class="token keyword">const</span> pool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AsyncPool</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>

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
 * \u5F02\u6B65\u5E76\u53D1\u63A7\u5236\u5668\uFF08\u6C60\uFF09
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">class</span> <span class="token class-name">AsyncPool<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u8BBE\u7F6E\u4E00\u6B21\u6027\u8BF7\u6C42\u6700\u5927\u6570\u91CF\uFF0C\u9ED8\u8BA46
   * @param max
   */</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>max<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * \u65B0\u589E\u5F02\u6B65\u65B9\u6CD5
     * @param asyncFn
     */</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token function-variable function">asyncFn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * \u6E05\u9664
     */</span>
    <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * \u83B7\u53D6\u8BF7\u6C42\u6C60\u7684\u957F\u5EA6
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
    <span class="token function">consume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * \u8BBE\u7F6E\u5F02\u6B65\u6C60
     * @param tasks
     * @private
     */</span>
    <span class="token keyword">private</span> setPool<span class="token punctuation">;</span>
    <span class="token comment">/**
     * \u9759\u6001\u76F4\u63A5\u8C03\u7528\u5F02\u6B65\u6C60
     * @param tasks
     * @param max
     */</span>
    <span class="token keyword">static</span> <span class="token generic-function"><span class="token function">query</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>tasks<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> max<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7),c=[o];function e(l,u,k,i,r,m){return a(),s("div",null,c)}var f=n(t,[["render",e]]);export{y as __pageData,f as default};
