import{_ as a,c as s,o as n,a as t}from"./app.6672c7b4.js";const h='{"title":"isBlankString","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"DTS","slug":"dts"}],"relativePath":"modules/vanilla/isNotBlankString.md","lastUpdated":1652277345000}',e={},o=t(`<h1 id="isblankstring" tabindex="-1">isBlankString <a class="header-anchor" href="#isblankstring" aria-hidden="true">#</a></h1><p>\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u4E3A\u7A7A</p><p>\u6BD4\u8D77 <code>!&#39;&#39;</code> \u4EE5\u5916 \u989D\u5916\u5224\u65AD <code>&#39;&#39;, &#39; &#39;, &#39;\\t&#39;, &#39;\\r&#39;, &#39;\\n&#39;, &#39;\\f&#39;, &#39;\\ufeff&#39;, &#39;\\u202a&#39;, &#39;\\u0000&#39;</code> \u8BA4\u4E3A\u8FD9\u4E9B\u5185\u5BB9\u4E3A\u7A7A</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> isNotBlankString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vill-v/vanilla&#39;</span>

<span class="token function">isNotBlankString</span><span class="token punctuation">(</span><span class="token string">&#39; \\r\\n&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt;false</span>
</code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">isNotBlankString</span><span class="token operator">:</span> <span class="token punctuation">(</span>str<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> str <span class="token keyword">is</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre></div>`,7),p=[o];function r(c,l,i,d,k,u){return n(),s("div",null,p)}var g=a(e,[["render",r]]);export{h as __pageData,g as default};