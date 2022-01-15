__NUXT_JSONP__("/article/5c4b2ef6425f444b816c7a18", {data:[{article:{_id:"5c4b2ef6425f444b816c7a18",meta:{createDate:"2019-01-25 23:44:55",updateDate:"2019-05-05 17:43:35"},tags:["笔记"],title:"浏览器相关知识点",content:"\u003Ch3\u003E浏览器输入url到看到页面\b的流程\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003EDNS解析\n\u003Cul\u003E\n\u003Cli\u003EDNS服务器对域名解析，得到目标服务器的IP后，进行HTTP访问\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E↓\u003C\u002Fli\u003E\n\u003Cli\u003E应用层【HTTP数据】\u003C\u002Fli\u003E\n\u003Cli\u003E↓\u003C\u002Fli\u003E\n\u003Cli\u003E传输层【TCP协议：确保可靠性】\n\u003Cul\u003E\n\u003Cli\u003E为了传输方便，在传输层（TCP 协议）把从应用层处收到的数据（HTTP 请求报文）进行分割，并在各个报文上打上标记序号及端口号后转发给网络层。\u003C\u002Fli\u003E\n\u003Cli\u003E三次握手🤝\n\u003Cul\u003E\n\u003Cli\u003E握手过程中使用了TCP的标志 [flag] —— SYN [synchronize] 和 ACK [acknowledgement]\n\u003Cul\u003E\n\u003Cli\u003E\b发送端首先发送一个带 SYN 标志的数据包给对方。\u003C\u002Fli\u003E\n\u003Cli\u003E接收端收到后，回传一个带有 SYN\u002FACK 标志的数据包以示传达确认信息。\u003C\u002Fli\u003E\n\u003Cli\u003E最后，发送端再回传一个带 ACK 标志的数据包，代表“握手”结束。若在握手过程中某个阶段莫名中断，TCP 协议会再次以相同的顺序发送相同的数据包。\u003Cbr\u003E\u003Cimg src=\"https:\u002F\u002Fgitee.com\u002Ftanxchen\u002Fimg\u002Fraw\u002Fmaster\u002Fblog\u002Ftcp-3-call.jpg\" width=\"420px\" height=\"280px\"\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E除了上述三次握手，TCP 协议还有其他各种手段来保证通信的可靠性\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E↓\u003C\u002Fli\u003E\n\u003Cli\u003E网络层【IP协议：负责传输、ARP协议：地址解析协议】\n\u003Cul\u003E\n\u003Cli\u003E增加作为通信目的地的 MAC 地址\u003C\u002Fli\u003E\n\u003Cli\u003EARP 是一种用以解析地址的协议，根据通信方的 IP 地址就可以反查出对应的 MAC 地址\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E↓\u003C\u002Fli\u003E\n\u003Cli\u003E数据链路层\u003C\u002Fli\u003E\n\u003Cli\u003E↓\u003C\u002Fli\u003E\n\u003Cli\u003E服务器\n\u003Cul\u003E\n\u003Cli\u003E数据链路层接收，\b\b按序往上层发送，并把对应的首部消去，TCP按序重组请求报文，HTTP处理请求，返回响应\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E↓\u003C\u002Fli\u003E\n\u003Cli\u003E处理请求，返回响应内容\u003C\u002Fli\u003E\n\u003Cli\u003E↓\u003C\u002Fli\u003E\n\u003Cli\u003E浏览器得到资源内容\u002F报文，进行解析渲染\n\u003Cul\u003E\n\u003Cli\u003E检查HTML并构建DOM\n\u003Cul\u003E\n\u003Cli\u003E字节 -&gt; 字符串 -&gt; node -&gt; DOM\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E检查CSS并构建CSSOM【CSS Object Model，是一个建立在web页面上的 CSS 样式的映射】\n\u003Cul\u003E\n\u003Cli\u003E字节 -&gt; 字符串 -&gt; node -&gt; DOM\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EWeb浏览器将DOM和CSSOM结合，并构建出渲染树（render tree）\n\u003Cul\u003E\n\u003Cli\u003E包含节点\b和节点样式信息\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E渲染引擎\b根据 RenderTree 开始渲染和展示\n\u003Cul\u003E\n\u003Cli\u003E布局（回流）：确定节点位置和大小\u003C\u002Fli\u003E\n\u003Cli\u003E绘制：调用CPU，合成图层，显示与屏幕\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E遇到 script、link 会阻塞\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E断开连接，四次挥手👋\u003Cbr\u003E\n\u003Cimg src=\"https:\u002F\u002Fgitee.com\u002Ftanxchen\u002Fimg\u002Fraw\u002Fmaster\u002Fblog\u002Fhttp-tcp.jpg\" width=\"450px\" height=\"450px\"\u003E\n\u003Cbr\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Chr\u003E\n\u003Cbr\u003E\n\u003Cimg src=\"https:\u002F\u002Fgitee.com\u002Ftanxchen\u002Fimg\u002Fraw\u002Fmaster\u002Fblog\u002Fall.jpg\" width=\"500px\" height=\"700px\"\u003E\n\u003Ch3\u003E协议对应OSI七层模型位置：\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003E物理层\u003C\u002Fli\u003E\n\u003Cli\u003E数据链路层\u003C\u002Fli\u003E\n\u003Cli\u003E网络层\n\u003Cul\u003E\n\u003Cli\u003EIP\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E传输层\n\u003Cul\u003E\n\u003Cli\u003ETCP\u003C\u002Fli\u003E\n\u003Cli\u003EUDP(User Data Protocal): 用户数据报协议\n\u003Cul\u003E\n\u003Cli\u003E不可靠，可能丢包而且包的顺序性也不能保证\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E会话层\u003C\u002Fli\u003E\n\u003Cli\u003E表示层\u003C\u002Fli\u003E\n\u003Cli\u003E应用层\n\u003Cul\u003E\n\u003Cli\u003Ehttp\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch3\u003E重绘、回流有什么区别？\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003E网页生成时，至少会渲染一次，在用户\b访问过程中，还会不断重新渲染\u003C\u002Fli\u003E\n\u003Cli\u003E重绘是当节点需要更改外观而不影响布局，如：color的改变\u003C\u002Fli\u003E\n\u003Cli\u003E\b回流是布局或者几何属性的改变，如：width、height的改变\u003C\u002Fli\u003E\n\u003Cli\u003E\b回流必定发生重绘，重绘未必引发回流\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch3\u003Easync 和 defer 有什么区别？\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003Easync 如果已经加载好，就会开始执行\u003C\u002Fli\u003E\n\u003Cli\u003E\bdefer 不阻塞 HTML 的解析，HTML解析完后，再执行\u003C\u002Fli\u003E\n\u003Cli\u003E加载多个JS脚本，async无序加载，而defer有序加载\n\u003Cul\u003E\n\u003Cli\u003E如加载 谷歌统计代码，使用async\u003C\u002Fli\u003E\n\u003Cli\u003E加载 JS相互依赖代码，使用defer，如 jQuery.js、jQuery-plugin.js\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch3\u003E为什么操作DOM慢？\u003C\u002Fh3\u003E\n\u003Cul\u003E\n\u003Cli\u003E相当于不同线程之间的通信\u003C\u002Fli\u003E\n\u003Cli\u003E可能带来重绘、回流\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch3\u003E强缓存和协商缓存\u003C\u002Fh3\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E强缓存是不经过服务器的, 协商缓存是经过服务器的\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003E强缓存可能从本地内存获取，也可能从本地磁盘内读取\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cul\u003E\n\u003Cli\u003E强缓存相关字段(Expires(响应头), Cache-Control(响应头)),\n\u003Cblockquote\u003E\n\u003Cp\u003ECache-Control优先级大于Expires\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cul\u003E\n\u003Cli\u003ECache-Control\n\u003Cul\u003E\n\u003Cli\u003Eno-cache：强制向源服务器再次验证\u003C\u002Fli\u003E\n\u003Cli\u003Eno-store：不缓存请求或响应的任何内容，\u003Cstrong\u003E这才是真的’no-cache’不缓存\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E…\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E协商缓存相关字段(Last-Modified(响应头), If-Modified-Since(请求头), Etag(响应头), If-None-Match(请求头))\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EHTTP 缓存机制流程图:\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fgitee.com\u002Ftanxchen\u002Fimg\u002Fraw\u002Fmaster\u002Fblog\u002Fcache.jpeg\" alt=\"catch\"\u003E\u003C\u002Fp\u003E\n\u003Ch3\u003E为什么建立连接是三次握手，而关闭连接却是四次挥手呢？\u003C\u002Fh3\u003E\n\u003Chr\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fbook.douban.com\u002Fsubject\u002F25863515\u002F\"\u003E参考-图解HTTP\u003C\u002Fa\u003E\u003Cbr\u003E\n\u003Ca href=\"https:\u002F\u002Fvarvy.com\u002Fperformance\u002Fcssom.html\"\u003E参考-Introduction to the CSS Object Model\u003C\u002Fa\u003E\u003Cbr\u003E\n\u003Ca href=\"https:\u002F\u002Fjuejin.im\u002Fpost\u002F5c24d736f265da614b120d4a\"\u003E参考-掘金文章-深入浅出浏览器渲染原理\u003C\u002Fa\u003E\u003Cbr\u003E\n\u003Ca href=\"https:\u002F\u002Fjuejin.im\u002Fpost\u002F5a0444d45188255ea95b66bc\"\u003E参考-掘金文章-TCP的三次握手四次挥手\u003C\u002Fa\u003E\u003Cbr\u003E\n\u003Ca href=\"https:\u002F\u002Fsegmentfault.com\u002Fa\u002F1190000017184701\"\u003E参考-segmentfault文章-从URL输入到页面展现到底发生什么？\u003C\u002Fa\u003E\u003Cbr\u003E\n\u003Ca href=\"https:\u002F\u002Fgithub.com\u002FMuYunyun\u002Fblog\u002Fblob\u002Fmaster\u002FBasicSkill\u002Fhttp\u002Fhttp.md\"\u003E参考-github.com\u002FMuYunyun\u002Fblog\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EARP协议相关资料：\u003Ca href=\"https:\u002F\u002Fbaike.baidu.com\u002Fitem\u002FARP\u002F609343\"\u003EARP协议百度百科\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",__v:0}}],fetch:{},mutations:void 0});