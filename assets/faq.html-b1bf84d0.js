import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as r,e as d}from"./app-984f11da.js";const h={},c=d(`<h3 id="支持的qq版本" tabindex="-1"><a class="header-anchor" href="#支持的qq版本" aria-hidden="true">#</a> 支持的QQ版本</h3><ul><li>版本 <code>8.9.68</code>，<code>8.9.70</code>，<code>8.9.73</code>，<code>8.9.75</code>，<code>8.9.78</code>，<code>8.9.80</code>，<code>8.9.81</code>，<code>8.9.83</code></li><li>未在上述说明中列出的版本可能存在兼容问题。</li></ul><h3 id="反检测" tabindex="-1"><a class="header-anchor" href="#反检测" aria-hidden="true">#</a> 反检测</h3><p>使用<strong>隐藏应用列表</strong>对QQ隐藏Shamrock，否则您可能遭到封禁。</p><h3 id="模拟器部署成功后电脑无法访问" tabindex="-1"><a class="header-anchor" href="#模拟器部署成功后电脑无法访问" aria-hidden="true">#</a> 模拟器部署成功后电脑无法访问？</h3><p>部分模拟器采用的是NAT网络，请使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>adb forward xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将模拟器内的端口监听转发到电脑，别和我说为什么别人的模拟器可以在外面直接访问，你的不行就不行！</p><blockquote><p>执行这个命令前，请注意adb是安卓调试桥工具包内的东西，请确保你的环境中有这个玩意，否则请前往谷歌官网或者刷机论坛之类的地方获取。</p></blockquote><h3 id="修改了配置文件-但没有生效" tabindex="-1"><a class="header-anchor" href="#修改了配置文件-但没有生效" aria-hidden="true">#</a> 修改了配置文件，但没有生效？</h3><p>Shamrock的部分配置需要重新启动QQ（请确保100%杀死QQ），然后在保证Shamrock存活的情况下启动QQ，Shamrock的WebSocket相关的所有配置都需要重新启动生效。</p><h3 id="某些事件-消息-操作不支持" tabindex="-1"><a class="header-anchor" href="#某些事件-消息-操作不支持" aria-hidden="true">#</a> 某些事件/消息/操作不支持？</h3><p>提交issue，我们会实现。</p><h3 id="qq闪退-每隔一段时间-怎么办" tabindex="-1"><a class="header-anchor" href="#qq闪退-每隔一段时间-怎么办" aria-hidden="true">#</a> QQ闪退(每隔一段时间)怎么办？</h3><p>勾选Shamrock的自动唤醒，或者使用某些框架自带QQ死亡自动唤醒的XP, MAGISK...插件。你要习以为常这个操作，请安装一些软件进行按时重启或者闪退重启，同时QQ有时也会有概率杀死他自己。</p><h3 id="真机息屏状态-api会变慢-无响应" tabindex="-1"><a class="header-anchor" href="#真机息屏状态-api会变慢-无响应" aria-hidden="true">#</a> 真机息屏状态，API会变慢/无响应？</h3><p>断网式：这个操作源自于MIUI的息屏省电，请保证关闭锁屏后断开数据，这个选项，关闭睡眠模式。</p><p>缓慢式：使用某些息屏挂机软件，为QQ附加一个息屏挂机状态。安装息屏挂机软件extinguish，或者使用MIUI游戏助手息屏挂机。</p><h3 id="模拟器部署-qq闪退" tabindex="-1"><a class="header-anchor" href="#模拟器部署-qq闪退" aria-hidden="true">#</a> 模拟器部署，QQ闪退？</h3><p>QQ修复了登录响应超时的问题，经测试(逍遥,夜神,MuMu)模拟器可正常使用，去QQ官网下载最新版本即可。</p><blockquote><p>其次，模拟器部署请使用Shamrock的ALL版本，不要使用WSA(Windows安卓子系统)部署(有兼容问题)。</p></blockquote><h3 id="模拟器部署-外部无法访问接口" tabindex="-1"><a class="header-anchor" href="#模拟器部署-外部无法访问接口" aria-hidden="true">#</a> 模拟器部署，外部无法访问接口？</h3><p>参考 <a href="#%E6%A8%A1%E6%8B%9F%E5%99%A8%E9%83%A8%E7%BD%B2%E6%88%90%E5%8A%9F%E5%90%8E%E7%94%B5%E8%84%91%E6%97%A0%E6%B3%95%E8%AE%BF%E9%97%AE">模拟器部署成功后电脑无法访问？</a></p><h3 id="docker部署支持" tabindex="-1"><a class="header-anchor" href="#docker部署支持" aria-hidden="true">#</a> Docker部署支持？</h3><p>目前依旧在计划中，主要是不太会docker。</p><h3 id="作为签名服务器时-无缝支持其它框架吗" tabindex="-1"><a class="header-anchor" href="#作为签名服务器时-无缝支持其它框架吗" aria-hidden="true">#</a> 作为签名服务器时，无缝支持其它框架吗？</h3><p>支持的，目前已支持的框架是icqq和gocq。</p><h3 id="一定要保证shamrock主app在后台运行吗" tabindex="-1"><a class="header-anchor" href="#一定要保证shamrock主app在后台运行吗" aria-hidden="true">#</a> 一定要保证Shamrock主APP在后台运行吗？</h3><p>不需要，因为OneBot服务运行在QQ主进程中，无需Shamrock主进程运行(当然第一次使用Shamrock，请启动Shamrock，推送配置要求Shamrock和QQ都在运行)。</p><h3 id="云手机支持哪些" tabindex="-1"><a class="header-anchor" href="#云手机支持哪些" aria-hidden="true">#</a> 云手机支持哪些？</h3><p>目前允许在中国移动云手机(Magisk)和红手指云手机(Lspatch)使用Shamrock，其它平台未测试。</p><h3 id="shamrock的日志怎么导出" tabindex="-1"><a class="header-anchor" href="#shamrock的日志怎么导出" aria-hidden="true">#</a> Shamrock的日志怎么导出？</h3><p>Shamrock的日志文件，按照时间和进程名称，保存在/sdcard/Android/data/com.tencent.mobileqq/Tencent/Shamrock文件夹内，请查看，提交issue时可以使用他们，注意请不要提交超过50kb的日志文件。</p>`,33),o=[c];function i(n,s){return e(),r("div",null,o)}const l=a(h,[["render",i],["__file","faq.html.vue"]]);export{l as default};
