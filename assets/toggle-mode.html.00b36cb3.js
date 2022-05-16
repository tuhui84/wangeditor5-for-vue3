import{_ as l,r as o,o as d,c as i,a as n,b as e,w as t,F as u,e as a,d as s}from"./app.ad838f46.js";const g={},m=a('<h1 id="toggle-mode" tabindex="-1"><a class="header-anchor" href="#toggle-mode" aria-hidden="true">#</a> toggle-mode</h1><blockquote><p><code>v0.0.9+</code> \u65B0\u589E</p></blockquote><p>\u7528\u4E8E\u5207\u6362\u7F16\u8F91\u5668\u7684\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u5BF9<strong>\u7F16\u8F91\u5668</strong>\u3001<strong>\u83DC\u5355\u680F</strong>\u548C<strong>\u7F16\u8F91\u533A</strong>\u7684 <code>mode</code> \u8FDB\u884C\u5207\u6362\u3002<em>\u5728\u6B64\u6587\u4E2D\u7684<strong>\u7F16\u8F91\u5668</strong>\u4EE3\u6307<strong>\u83DC\u5355\u680F</strong>\u548C<strong>\u7F16\u8F91\u533A</strong>\u7684\u6784\u6210\u7684\u6574\u4F53\u3002</em></p>',3),k={href:"https://www.wangeditor.com/v5/getting-started.html#mode-%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},b=s("wangEditor \u6587\u6863\uFF1Amode \u6A21\u5F0F"),h=a(`<h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> registToggleMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;wangeditor5-for-vue3&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token function">registToggleMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="registtogglemode" tabindex="-1"><a class="header-anchor" href="#registtogglemode" aria-hidden="true">#</a> registToggleMode</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">registToggleMode</span><span class="token punctuation">(</span>options<span class="token operator">?</span><span class="token operator">:</span> RegistToggleModeOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="registtogglemodeoptions" tabindex="-1"><a class="header-anchor" href="#registtogglemodeoptions" aria-hidden="true">#</a> RegistToggleModeOptions</h2>`,5),y=s("\u7EC6\u8282\u8BF7\u67E5\u770B "),f={href:"https://github.com/clinfc/wangeditor5-for-vue3/tree/main/src/toggle-mode/types.ts",target:"_blank",rel:"noopener noreferrer"},v=s("toggle-mode types"),_=a(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">RegistToggleModeOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u81EA\u5B9A\u4E49\u7684\u591A\u8BED\u8A00\u96C6\u5408
   */</span>
  locale<span class="token operator">?</span><span class="token operator">:</span> ToggleLocale
  <span class="token doc-comment comment">/**
   * \u6CE8\u518C\u5230\u9ED8\u8BA4\u83DC\u5355\u680F\u7684\u663E\u793A\u683C\u5F0F\u3002\u4E3A false \u65F6\uFF0C\u5C06\u53D6\u6D88\u6CE8\u518C\u5230\u5168\u5C40\u83DC\u5355\u680F\u914D\u7F6E\u3002
   */</span>
  menu<span class="token operator">?</span><span class="token operator">:</span> ToggleModeMenuKey <span class="token operator">|</span> <span class="token boolean">false</span>
  <span class="token doc-comment comment">/**
   * \u662F\u5426\u5728\u6CE8\u518C\u7684\u83DC\u5355\u680F\u524D\u9762\u6DFB\u52A0\u5206\u5272\u7EBF
   */</span>
  divider<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token doc-comment comment">/**
   * \u5F53\u5207\u6362\u65B9\u5F0F\u4E3A\u6574\u4F53\u8FDB\u884C\u5207\u6362\u65F6\uFF0C\u5207\u6362\u7684\u6A21\u5F0F\u662F\u4EE5\u54EA\u4E00\u4E2A\u4E3A\u51C6\u3002toolbar\uFF1A\u4EE5\u83DC\u5355\u680F\u4E3A\u51C6\uFF1Beditable\uFF1A\u4EE5\u7F16\u8F91\u533A\u4E3A\u51C6\uFF1Bauto\uFF1A\u5404\u81EA\u72EC\u7ACB\u5207\u6362\uFF0C\u76F8\u4E92\u4E0D\u5F71\u54CD\u3002
   */</span>
  standard<span class="token operator">?</span><span class="token operator">:</span> Standrad
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="menu" tabindex="-1"><a class="header-anchor" href="#menu" aria-hidden="true">#</a> menu</h3><p>\u7528\u4E8E\u914D\u7F6E <code>toggle-mode</code> \u83DC\u5355\u6DFB\u52A0\u5230\u5168\u5C40\u9ED8\u8BA4\u83DC\u5355\u680F\u65F6\u7684\u5177\u4F53\u65B9\u5F0F\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ToggleModeMenuKey</span> <span class="token operator">=</span> <span class="token string">&#39;toggleModeButton&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;toggleModeSelect&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p><code>toggleModeButton</code></p><p>\u6DFB\u52A0\u5230\u5168\u5C40\u9ED8\u8BA4\u83DC\u5355\u680F\u4E2D\u7684\u4E3A\u4E00\u4E2A\u6309\u94AE\u83DC\u5355\uFF0C\u6B64\u83DC\u5355\u53EA\u652F\u6301\u5207\u6362<strong>\u7F16\u8F91\u5668</strong>\u7684 <code>mode</code> \u6A21\u5F0F\u3002</p></li><li><p><code>toggleModeSelect</code></p><p>\u6DFB\u52A0\u5230\u5168\u5C40\u9ED8\u8BA4\u83DC\u5355\u680F\u4E2D\u7684\u4E3A\u4E00\u4E2A\u4E0B\u62C9\u5217\u8868\u83DC\u5355\uFF0C\u6B64\u83DC\u5355\u7684\u4E0B\u62C9\u9879\u5206\u522B\u5BF9\u5E94<strong>\u7F16\u8F91\u5668</strong>\u3001<strong>\u83DC\u5355\u680F</strong>\u548C<strong>\u7F16\u8F91\u533A</strong>\u7684 <code>mode</code> \u5207\u6362\u9009\u9879\u3002</p></li><li><p><code>false</code></p><p>\u4E0D\u6DFB\u52A0\u5230\u5168\u5C40\u83DC\u5355\u680F\u914D\u7F6E\u4E2D\uFF0C\u5982\u679C\u7528\u6237\u8981\u4F7F\u7528 <code>toggle-mode</code> \u83DC\u5355\uFF0C\u9700\u8981\u5728 <code>WeToolbarOption.config.toolbarKeys</code> \u4E2D\u8FDB\u884C\u914D\u7F6E\u624D\u4F1A\u751F\u6548\u3002</p></li></ul><h3 id="divider" tabindex="-1"><a class="header-anchor" href="#divider" aria-hidden="true">#</a> divider</h3><p>\u8FD9\u4E2A\u914D\u7F6E\u9879\u662F <code>menu</code> \u7684\u9644\u5C5E\u914D\u7F6E\uFF0C\u610F\u5728\u63A7\u5236\u662F\u5426\u5728 <code>toggle-mode</code> \u83DC\u5355\u524D\u6DFB\u52A0\u5206\u5272\u7EBF <code>|</code>\u3002\u9ED8\u8BA4\u503C\uFF1A<code>true</code>\u3002</p><h3 id="standard" tabindex="-1"><a class="header-anchor" href="#standard" aria-hidden="true">#</a> standard</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Standrad</span> <span class="token operator">=</span> <span class="token string">&#39;toolbar&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;editable&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;auto&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5F53\u8FDB\u884C<strong>\u7F16\u8F91\u5668</strong>\u7EA7\u522B\u7684 <code>mode</code> \u5207\u6362\u65F6\uFF0C\u5982\u82E5\u6B64\u65F6\u7684<strong>\u83DC\u5355\u680F</strong>\u548C<strong>\u7F16\u8F91\u533A</strong>\u7684 <code>mode</code> \u7C7B\u578B\u4E0D\u4E00\u81F4\uFF0C\u6211\u4EEC\u9700\u8981\u4EE5\u90A3\u4E00\u4E2A\u7684\u503C\u4E3A\u51C6\u3002\u9ED8\u8BA4\u503C\uFF1A<code>auto</code>\u3002</p><ul><li><p><code>toolbar</code></p><p>\u4EE5<strong>\u83DC\u5355\u680F</strong>\u4E3A\u51C6\u3002\u4F8B\u5982\uFF1A\u6B64\u65F6\u83DC\u5355\u680F\u7684 <code>mode</code> \u4E3A <code>default</code>\uFF0C\u7F16\u8F91\u533A\u7684 <code>mode</code> \u4E3A <code>simple</code>\uFF0C\u90A3\u4E48\u5207\u6362\u540E\u7684\u83DC\u5355\u680F\u548C\u7F16\u8F91\u533A\u7684 <code>mode</code> \u7EDF\u4E00\u4E3A <code>simple</code>\u3002</p></li><li><p><code>editable</code></p><p>\u4EE5<strong>\u7F16\u8F91\u533A</strong>\u4E3A\u51C6\u3002\u4F8B\u5982\uFF1A\u6B64\u65F6\u83DC\u5355\u680F\u7684 <code>mode</code> \u4E3A <code>default</code>\uFF0C\u7F16\u8F91\u533A\u7684 <code>mode</code> \u4E3A <code>simple</code>\uFF0C\u90A3\u4E48\u5207\u6362\u540E\u7684\u83DC\u5355\u680F\u548C\u7F16\u8F91\u533A\u7684 <code>mode</code> \u7EDF\u4E00\u4E3A <code>default</code>\u3002</p></li><li><p><code>auto</code></p><p>\u5404\u81EA\u72EC\u7ACB\u5207\u6362\uFF0C\u76F8\u4E92\u4E0D\u5F71\u54CD\u3002\u4F8B\u5982\uFF1A\u6B64\u65F6\u83DC\u5355\u680F\u7684 <code>mode</code> \u4E3A <code>default</code>\uFF0C\u7F16\u8F91\u533A\u7684 <code>mode</code> \u4E3A <code>simple</code>\uFF0C\u90A3\u4E48\u5207\u6362\u540E\u7684\u83DC\u5355\u680F\u548C\u7F16\u8F91\u533A\u7684 <code>mode</code> \u5206\u522B\u4E3A <code>simple</code> \u548C <code>default</code>\u3002</p></li></ul><h3 id="locale" tabindex="-1"><a class="header-anchor" href="#locale" aria-hidden="true">#</a> locale</h3><p>\u8FD9\u662F\u591A\u8BED\u8A00\u914D\u7F6E\uFF0C\u5982\u679C\u4F60\u4E0D\u559C\u6B22\u9ED8\u8BA4\u7684\u914D\u7F6E\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u5B9A\u4E49\u81EA\u5DF1\u60F3\u8981\u7684\uFF0C\u6216\u8005\u5728\u8FD9\u91CC\u6DFB\u52A0\u5176\u5B83\u7684\u8BED\u8A00\u652F\u6301\uFF08\u4F1A\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u8FDB\u884C\u5408\u5E76\uFF09\u3002\u9ED8\u8BA4\u652F\u6301 <code>en</code> \u548C <code>zh-CN</code> \u4E24\u79CD\u8BED\u8A00\u3002</p><h2 id="\u591A\u8BED\u8A00-\u56FD\u9645\u5316" tabindex="-1"><a class="header-anchor" href="#\u591A\u8BED\u8A00-\u56FD\u9645\u5316" aria-hidden="true">#</a> \u591A\u8BED\u8A00/\u56FD\u9645\u5316</h2><p><code>toggle-mode</code> \u6269\u5C55\u83DC\u5355\u7684\u591A\u8BED\u8A00\u58F0\u660E\u5982\u4E0B</p><h3 id="\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E" aria-hidden="true">#</a> \u58F0\u660E</h3>`,16),w=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" zhTW "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"mode"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5207\u63DB\u6A21\u5F0F'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"editor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'${mode} \u7DE8\u8F2F\u5668'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"toolbar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'${mode} \u83DC\u55AE\u6B04'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"editable"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'${mode} \u7DE8\u8F2F\u5340'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"standardAuto"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5207\u63DB\u7DE8\u8F2F\u5668\u6A21\u5F0F'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br")])],-1),x=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ToggleModeLanguage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'wangeditor5-for-vue3'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" zhTW"),n("span",{class:"token operator"},":"),s(" ToggleModeLanguage "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  mode`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5207\u63DB\u6A21\u5F0F'"),n("span",{class:"token punctuation"},","),s(`
    editor`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'${mode} \u7DE8\u8F2F\u5668'"),n("span",{class:"token punctuation"},","),s(`
    toolbar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'${mode} \u83DC\u55AE\u6B04'"),n("span",{class:"token punctuation"},","),s(`
    editable`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'${mode} \u7DE8\u8F2F\u5340'"),n("span",{class:"token punctuation"},","),s(`
    standardAuto`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5207\u63DB\u7DE8\u8F2F\u5668\u6A21\u5F0F'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br")])],-1),T=a(`<h3 id="\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C" aria-hidden="true">#</a> \u6CE8\u518C</h3><p><strong>\u65B9\u6CD5\u4E00</strong>\uFF1A\u4F7F\u7528 <code>@wangeditor/editor</code> \u5185\u7F6E\u7684\u591A\u8BED\u8A00\u6CE8\u518C\u51FD\u6570\u8FDB\u884C\u6CE8\u518C\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> i18nAddResources <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token function">i18nAddResources</span><span class="token punctuation">(</span><span class="token string">&#39;zh-tw&#39;</span><span class="token punctuation">,</span> zhTW<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>\u65B9\u6CD5\u4E8C</strong>\uFF1A\u4F7F\u7528 <code>wangeditor5-for-vue3</code> \u7684 <code>registToggleMode</code> \u51FD\u6570\uFF0C\u5728\u6211\u4EEC\u6CE8\u518C <code>toggle-mode</code> \u83DC\u5355\u7684\u65F6\u5019\uFF0C\u5C06\u65B0\u589E\u7684\u591A\u8BED\u8A00\u653E\u7F6E\u5728\u591A\u8BED\u8A00\u914D\u7F6E\u9879\u4E2D\u5373\u53EF\u591A\u8BED\u8A00\u7684\u6CE8\u518C\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> registToggleMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;wangeditor5-for-vue3&#39;</span>

<span class="token function">registToggleMode</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  locale<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;zh-tw&#39;</span><span class="token operator">:</span> zhTW<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,5);function M(A,C){const p=o("ExternalLinkIcon"),r=o("CodeGroupItem"),c=o("CodeGroup");return d(),i(u,null,[m,n("blockquote",null,[n("p",null,[n("a",k,[b,e(p)])])]),h,n("blockquote",null,[n("p",null,[y,n("a",f,[v,e(p)])])]),_,e(c,null,{default:t(()=>[e(r,{title:"JS"},{default:t(()=>[w]),_:1}),e(r,{title:"TS",active:""},{default:t(()=>[x]),_:1})]),_:1}),T],64)}var S=l(g,[["render",M],["__file","toggle-mode.html.vue"]]);export{S as default};
