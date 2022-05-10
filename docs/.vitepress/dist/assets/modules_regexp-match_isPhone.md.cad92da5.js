import{_ as n,c as s,o as a,a as t}from"./app.61e5eb8c.js";const h='{"title":"isPhone","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"DTS","slug":"dts"}],"relativePath":"modules/regexp-match/isPhone.md"}',e={},p=t(`<h1 id="isphone" tabindex="-1">isPhone <a class="header-anchor" href="#isphone" aria-hidden="true">#</a></h1><p>\u9A8C\u8BC1\u624B\u673A\u53F7</p><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>isMobile<span class="token punctuation">,</span> isMobileHk<span class="token punctuation">,</span> isMobileTw<span class="token punctuation">,</span> isMobileMo<span class="token punctuation">,</span> isPhone<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vill-v/regexp-match&#39;</span>

<span class="token comment">/**
 * \u9A8C\u8BC1\u662F\u5426\u4E3A\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\uFF09
 *
 * @param value \u503C
 * @return \u662F\u5426\u4E3A\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\uFF09
 */</span>
<span class="token function">isMobile</span><span class="token punctuation">(</span><span class="token string">&#39;1111111&#39;</span><span class="token punctuation">)</span>
<span class="token comment">/**
 * \u9A8C\u8BC1\u662F\u5426\u4E3A\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\u9999\u6E2F\uFF09
 * @param value \u624B\u673A\u53F7\u7801
 * @return \u662F\u5426\u4E3A\u4E2D\u56FD\u9999\u6E2F\u624B\u673A\u53F7\u7801
 */</span>
<span class="token function">isMobileHk</span><span class="token punctuation">(</span><span class="token string">&#39;1111111&#39;</span><span class="token punctuation">)</span>
<span class="token comment">/**
 * \u9A8C\u8BC1\u662F\u5426\u4E3A\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\u53F0\u6E7E\uFF09
 * @param value \u624B\u673A\u53F7\u7801
 * @return \u662F\u5426\u4E3A\u4E2D\u56FD\u53F0\u6E7E\u624B\u673A\u53F7\u7801
 */</span>
<span class="token function">isMobileTw</span><span class="token punctuation">(</span><span class="token string">&#39;1111111&#39;</span><span class="token punctuation">)</span>
<span class="token comment">/**
 * \u9A8C\u8BC1\u662F\u5426\u4E3A\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\u6FB3\u95E8\uFF09
 * @param value \u624B\u673A\u53F7\u7801
 * @return \u662F\u5426\u4E3A\u4E2D\u56FD\u6FB3\u95E8\u624B\u673A\u53F7\u7801
 */</span>
<span class="token function">isMobileMo</span><span class="token punctuation">(</span><span class="token string">&#39;1111111&#39;</span><span class="token punctuation">)</span>
<span class="token comment">/**
 * \u9A8C\u8BC1\u662F\u5426\u4E3A\u624B\u673A\u53F7\u7801\uFF08CharUtil\u4E2D\u56FD\uFF09 \u624B\u673A\u53F7\u53F7\u7801\uFF08\u4E2D\u56FD\u9999\u6E2F,\u4E2D\u56FD\u53F0\u6E7E,\u4E2D\u56FD\u6FB3\u95E8\uFF09
 *
 * @param value \u503C
 * @return \u662F\u5426\u4E3A\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\uFF09+\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\u9999\u6E2F\uFF09+\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\u53F0\u6E7E\uFF09+\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\u6FB3\u95E8\uFF09
 */</span>
<span class="token function">isPhone</span><span class="token punctuation">(</span><span class="token string">&#39;1111111&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="dts" tabindex="-1">DTS <a class="header-anchor" href="#dts" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token comment">/**
 * \u9A8C\u8BC1\u662F\u5426\u4E3A\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\uFF09
 *
 * @param value \u503C
 * @return \u662F\u5426\u4E3A\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\uFF09
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">isMobile</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u9A8C\u8BC1\u662F\u5426\u4E3A\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\u9999\u6E2F\uFF09
 * @param value \u624B\u673A\u53F7\u7801
 * @return \u662F\u5426\u4E3A\u4E2D\u56FD\u9999\u6E2F\u624B\u673A\u53F7\u7801
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">isMobileHk</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u9A8C\u8BC1\u662F\u5426\u4E3A\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\u53F0\u6E7E\uFF09
 * @param value \u624B\u673A\u53F7\u7801
 * @return \u662F\u5426\u4E3A\u4E2D\u56FD\u53F0\u6E7E\u624B\u673A\u53F7\u7801
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">isMobileTw</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u9A8C\u8BC1\u662F\u5426\u4E3A\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\u6FB3\u95E8\uFF09
 * @param value \u624B\u673A\u53F7\u7801
 * @return \u662F\u5426\u4E3A\u4E2D\u56FD\u6FB3\u95E8\u624B\u673A\u53F7\u7801
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">isMobileMo</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u9A8C\u8BC1\u662F\u5426\u4E3A\u624B\u673A\u53F7\u7801\uFF08CharUtil\u4E2D\u56FD\uFF09 \u624B\u673A\u53F7\u53F7\u7801\uFF08\u4E2D\u56FD\u9999\u6E2F,\u4E2D\u56FD\u53F0\u6E7E,\u4E2D\u56FD\u6FB3\u95E8\uFF09
 *
 * @param value \u503C
 * @return \u662F\u5426\u4E3A\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\uFF09+\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\u9999\u6E2F\uFF09+\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\u53F0\u6E7E\uFF09+\u624B\u673A\u53F7\u7801\uFF08\u4E2D\u56FD\u6FB3\u95E8\uFF09
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">isPhone</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div>`,6),o=[p];function c(l,i,u,r,k,d){return a(),s("div",null,o)}var b=n(e,[["render",c]]);export{h as __pageData,b as default};
