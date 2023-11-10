import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e}from"./app-984f11da.js";const t={},o=e(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>Shamrock 为您提供了一个支持 OneBot 标准的 HTTP API。<br> 您可以通过发送 HTTP 请求来与 Shamrock 进行交互。</p></div><h2 id="请求" tabindex="-1"><a class="header-anchor" href="#请求" aria-hidden="true">#</a> 请求</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Shamrock 目前支持 GET 和 POST 两种请求方式。<br> 在大部分情况下，您可以使用 GET 请求来与 Shamrock 进行交互。<br> 但是，如果您需要向 Shamrock 发送大量数据，或者需要向 Shamrock 发送二进制数据，您需要使用 POST 请求。</p></div><h3 id="get-请求" tabindex="-1"><a class="header-anchor" href="#get-请求" aria-hidden="true">#</a> GET 请求</h3><p>GET 请求的 URL 由以下部分组成：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://&lt;host&gt;:&lt;port&gt;/&lt;endpoint&gt;?&lt;params&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>链接中的含义如下：</p><ul><li><code>&lt;host&gt;</code>：Shamrock 的 IP 地址或域名</li><li><code>&lt;port&gt;</code>：Shamrock 的 HTTP API 端口</li><li><code>&lt;endpoint&gt;</code>：Shamrock 的 HTTP API 端点</li><li><code>&lt;params&gt;</code>：HTTP GET 请求的参数</li></ul><h3 id="post-请求" tabindex="-1"><a class="header-anchor" href="#post-请求" aria-hidden="true">#</a> POST 请求</h3><p>POST 请求的 URL 由以下部分组成：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://&lt;host&gt;:&lt;port&gt;/&lt;endpoint&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>链接中的含义如下：</p><ul><li><code>&lt;host&gt;</code>：Shamrock 的 IP 地址或域名</li><li><code>&lt;port&gt;</code>：Shamrock 的 HTTP API 端口</li><li><code>&lt;endpoint&gt;</code>：Shamrock 的 HTTP API 端点</li></ul><h4 id="请求格式" tabindex="-1"><a class="header-anchor" href="#请求格式" aria-hidden="true">#</a> 请求格式</h4><p>POST 请求的数据格式为 JSON</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;param1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;param2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value2&quot;</span><span class="token punctuation">,</span>
  ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>POST 请求的数据格式为表单</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>param1=value1&amp;param2=value2&amp;...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>大多数情况下，推荐使用 JSON 格式的 POST 请求。</p><h3 id="websocket-请求" tabindex="-1"><a class="header-anchor" href="#websocket-请求" aria-hidden="true">#</a> WebSocket 请求</h3><p>Shamrock 支持使用 WebSocket 进行通信。</p><p>可选的 WebSocket 地址有两种：</p><ul><li><code>ws://&lt;host&gt;:&lt;port&gt;</code></li><li><code>ws://&lt;host&gt;:&lt;port&gt;/api</code></li></ul><p>区别在于，<code>/</code> 除了发送和响应 API 请求外，还支持事件上报功能。</p><h3 id="请求格式-1" tabindex="-1"><a class="header-anchor" href="#请求格式-1" aria-hidden="true">#</a> 请求格式</h3><p>Shamrock 使用 WebSocket 时，请求的数据格式为 JSON</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;send_private_msg&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 请求 API 端点</span>
  <span class="token property">&quot;params&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 请求参数</span>
    <span class="token property">&quot;user_id&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;echo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span> <span class="token comment">// 自定义的回显字段</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 <code>echo</code> 字段，Shamrock 会在响应中原样返回。</p><h2 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h2><p>Shamrock 的响应格式为 JSON</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 状态，ok 为成功，其他将在下文中详细说明</span>
  <span class="token property">&quot;retcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 返回码，0 为成功，非 0 为失败</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 错误信息，仅在 API 调用失败时出现</span>
  <span class="token property">&quot;wording&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 对错误信息的描述，仅在 API 调用失败时出现</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 响应数据</span>
    <span class="token property">&quot;message_id&quot;</span><span class="token operator">:</span> <span class="token number">123456</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;echo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span> <span class="token comment">// 请求中的回显字段</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="状态" tabindex="-1"><a class="header-anchor" href="#状态" aria-hidden="true">#</a> 状态</h3><p>Shamrock 的响应状态有以下几种：</p><ul><li><code>ok</code>：成功</li><li><code>failed</code>：失败</li></ul>`,34),p=[o];function c(i,l){return n(),a("div",null,p)}const u=s(t,[["render",c],["__file","request-response.html.vue"]]);export{u as default};
