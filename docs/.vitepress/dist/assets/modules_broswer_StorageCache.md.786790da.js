import{_ as n,c as s,o as a,a as t}from"./app.6672c7b4.js";const d='{"title":"StorageCache","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"DTS","slug":"dts"}],"relativePath":"modules/broswer/StorageCache.md","lastUpdated":1652177014000}',p={},o=t(`<h1 id="storagecache" tabindex="-1">StorageCache <a class="header-anchor" href="#storagecache" aria-hidden="true">#</a></h1><p>\u5BF9\u6D4F\u89C8\u5668localStorage\u548CsessionStorage\u6216\u8005localStorage Like \u7684\u7EDF\u4E00\u5C01\u88C5</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><p>\u666E\u901A\u4F7F\u7528</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>StorageCache<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vill-v/broswer&#39;</span>

<span class="token keyword">const</span> normalStorage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StorageCache</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">,</span> <span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u79FB\u9664</span>
normalStorage<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u662F\u5426\u5B58\u5728</span>
normalStorage<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u83B7\u53D6\u503C</span>
normalStorage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u8BBE\u7F6E\u503C</span>
normalStorage<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u83B7\u53D6\u503C</span>
normalStorage<span class="token punctuation">.</span>value
<span class="token comment">// \u8BBE\u7F6E\u503C</span>
normalStorage<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>
<span class="token comment">// \u662F\u5426\u548C\u5165\u53C2\u76F8\u540C</span>
normalStorage<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u4E0EnormalStorage.get()\u76F8\u540C</span>
normalStorage<span class="token punctuation">.</span><span class="token function">rawGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u4E0EnormalStorage.set()\u76F8\u540C</span>
normalStorage<span class="token punctuation">.</span><span class="token function">rawSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u4E0E normalStorage.value \u76F8\u540C</span>
normalStorage<span class="token punctuation">.</span>rawValue
<span class="token comment">// \u4E0EnormalStorage.eq(&#39;bar&#39;)\u76F8\u540C</span>
normalStorage<span class="token punctuation">.</span><span class="token function">rawEq</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5BF9\u503C\u8FDB\u884C\u89E3\u6790</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>StorageCache<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vill-v/broswer&#39;</span>

<span class="token comment">/**
 * \u81EA\u5B9A\u4E49\u503C\u7684\u89E3\u6790\u89C4\u5219
 */</span>
<span class="token keyword">const</span> storage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StorageCache</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">,</span> <span class="token string">&#39;userInfo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">/**
 * \u7B2C\u4E09\u53C2\u6570\u4E3Atrue\u65F6\u9ED8\u8BA4\u4F7F\u7528JSON AP\u8FDB\u884C\u89E3\u6790\u4E0E\u5E8F\u5217\u5316
 */</span>
<span class="token keyword">const</span> normalStorage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StorageCache</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">,</span> <span class="token string">&#39;userInfo&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

<span class="token comment">// \u79FB\u9664</span>
normalStorage<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u662F\u5426\u5B58\u5728</span>
normalStorage<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u83B7\u53D6\u503C</span>
normalStorage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u8BBE\u7F6E\u503C</span>
normalStorage<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u83B7\u53D6\u503C</span>
normalStorage<span class="token punctuation">.</span>value
<span class="token comment">// \u8BBE\u7F6E\u503C</span>
normalStorage<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>
<span class="token comment">// \u662F\u5426\u548C\u5165\u53C2\u76F8\u540C</span>
<span class="token comment">// \u8BE5\u65B9\u6CD5\u5185\u90E8\u4F7F\u7528\u4E3A === \u53EA\u80FD\u5339\u914D\u57FA\u7840\u7C7B\u578B</span>
normalStorage<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u83B7\u53D6\u5B57\u7B26\u4E32\u539F\u503C</span>
normalStorage<span class="token punctuation">.</span><span class="token function">rawGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u76F4\u63A5\u8BBE\u7F6E\u5B57\u7B26\u4E32\u503C</span>
normalStorage<span class="token punctuation">.</span><span class="token function">rawSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u83B7\u53D6\u5B57\u7B26\u4E32\u539F\u503C</span>
normalStorage<span class="token punctuation">.</span>rawValue
<span class="token comment">// \u8BBE\u7F6E\u5B57\u7B26\u4E32\u539F\u503C</span>
normalStorage<span class="token punctuation">.</span>rawValue <span class="token operator">=</span> <span class="token string">&#39;{userId:1}&#39;</span>
<span class="token comment">// \u4E0E\u5B57\u7B26\u4E32\u539F\u503C\u6BD4\u8F83\u662F\u5426\u76F8\u540C</span>
normalStorage<span class="token punctuation">.</span><span class="token function">rawEq</span><span class="token punctuation">(</span><span class="token string">&#39;{userId:1}&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token comment">/**
 *  \u503C\u89E3\u6790\u89C4\u5219
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">StorageCacheStoreParseType<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Storage\u7F13\u5B58\u5546\u5E97
 * \u63D0\u4F9B\u81EA\u52A8json\u6570\u636E\u5904\u7406\u529F\u80FD
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">class</span> <span class="token class-name">StorageCache<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u521D\u59CB\u5316
   * @param storage \u5B9A\u4E49\u7F13\u5B58
   * @param key \u5B9A\u4E49\u50A8\u5B58\u7684key
   * @param parse \u5B9A\u4E49\u89E3\u6790\u89C4\u5219
   */</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>storage<span class="token operator">:</span> Storage<span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> parse<span class="token operator">?</span><span class="token operator">:</span> StorageCacheStoreParseType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">private</span> _changeParse<span class="token punctuation">;</span>

  <span class="token comment">/**
   * \u83B7\u53D6key\u503C
   * \u5728\u7F13\u5B58\u7EDF\u4E00\u7BA1\u7406\uFF0C\u5E76\u5BF9key\u8FDB\u884C\u6DF7\u6DC6\u4E4B\u540E\u5B83\u5F88\u6709\u7528
   */</span>
  <span class="token keyword">get</span> <span class="token function">key</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token comment">/**
   * \u662F\u5426\u5B58\u5728\u8BE5\u7F13\u5B58
   */</span>
  <span class="token function">has</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token comment">/**
   * \u83B7\u53D6\u539F\u59CB\u503C
   */</span>
  <span class="token function">rawGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">/**
   * \u8BBE\u7F6E\u539F\u59CB\u503C
   * @param value
   */</span>
  <span class="token function">rawSet</span><span class="token punctuation">(</span>value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">/**
   * \u83B7\u53D6\u503C
   */</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">/**
   * \u8BBE\u7F6E\u503C
   * @param value
   */</span>
  <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">/**
   * \u83B7\u53D6\u503C
   */</span>
  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">/**
   * \u8BBE\u7F6E\u503C
   * @param value
   */</span>
  <span class="token keyword">set</span> <span class="token function">value</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/**
   * \u83B7\u53D6\u539F\u59CB\u503C
   */</span>
  <span class="token keyword">get</span> <span class="token function">rawValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

  <span class="token comment">/**
   * \u8BBE\u7F6E\u539F\u59CB\u503C
   * @param value
   */</span>
  <span class="token keyword">set</span> <span class="token function">rawValue</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/**
   * \u79FB\u9664\u8BE5\u7F13\u5B58
   */</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">/**
   * \u539F\u503C\u662F\u5426\u76F8\u7B49
   * @param value
   */</span>
  <span class="token function">rawEq</span><span class="token punctuation">(</span>value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token comment">/**
   * \u503C\u662F\u5426\u76F8\u7B49
   * \u6682\u65F6\u53EA\u662F\u7528===\u6BD4\u8F83
   * @param value
   */</span>
  <span class="token function">eq</span><span class="token punctuation">(</span>value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,9),e=[o];function c(l,k,u,r,i,m){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{d as __pageData,f as default};
