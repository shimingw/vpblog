(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{254:function(t,e,a){"use strict";a.r(e);var r=a(2),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"http-协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-协议"}},[t._v("#")]),t._v(" http 协议")]),t._v(" "),a("h4",{attrs:{id:"请求头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求头"}},[t._v("#")]),t._v(" 请求头")]),t._v(" "),a("p",[a("code",[t._v("Connection")]),t._v("：close 和 keep-alive。是否支持长连接。长连接可以重用 http 请求资源，减少资源开销\n"),a("code",[t._v("Host")]),t._v("：发起请求的域名或者 ip\n"),a("code",[t._v("etag")]),t._v("：被请求变量的实体值，nginx 会给每个静态资源打上一个 etag 标签，客户端每次请求的时候会带上"),a("code",[t._v("If-None-Match")]),t._v("如果 nginx 的资源没有发生变化，则 Etag 标签不会发生改变。浏览器会返回 304，服务器就从缓存中读取资源。")]),t._v(" "),a("h3",{attrs:{id:"常用变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用变量"}},[t._v("#")]),t._v(" 常用变量")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("$http_host")]),t._v("：客户端请求头中携带的 host")]),t._v(" "),a("li",[a("code",[t._v("$host")]),t._v("：nginx 服务器的域名或者 ip")]),t._v(" "),a("li",[a("code",[t._v("$proxy_port")]),t._v("："),a("strong",[t._v("proxy_pass")]),t._v("对应后端服务器的端口")]),t._v(" "),a("li",[a("code",[t._v("$remote_addr")]),t._v("：用户 ip")]),t._v(" "),a("li",[a("code",[t._v("$proxy_add_x_forwarded_for")]),t._v("：添加用户 ip 和每次 nginx 反向代理服务器的 ip 用逗号隔开，起到一个溯源的作用。")])]),t._v(" "),a("h3",{attrs:{id:"常用指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用指令"}},[t._v("#")]),t._v(" 常用指令")]),t._v(" "),a("h4",{attrs:{id:"proxy-set-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-set-header"}},[t._v("#")]),t._v(" proxy_set_header")]),t._v(" "),a("blockquote",[a("p",[t._v("允许重新定义或者添加发往后端服务器的请求头")])]),t._v(" "),a("h5",{attrs:{id:"host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" Host")]),t._v(" "),a("p",[t._v("默认情况下，只有两个请求头会被重新定义："),a("code",[t._v("Host")]),t._v("和"),a("code",[t._v("Connection")])]),t._v(" "),a("p",[t._v("如果不想改变请求头“Host”的值，可以这样来设置：\n"),a("code",[t._v("proxy_set_header Host $http_host;")])]),t._v(" "),a("h4",{attrs:{id:"websocket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[t._v("#")]),t._v(" websocket")]),t._v(" "),a("p",[t._v("nginx 代理转发 websocket 请求")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('proxy_set_header Upgrade $http_upgrade;\nproxy_set_header Connection "upgrade";\n')])])]),a("h4",{attrs:{id:"proxy-connect-timeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-connect-timeout"}},[t._v("#")]),t._v(" proxy_connect_timeout")]),t._v(" "),a("blockquote",[a("p",[t._v("设置与后端服务器建立连接的超时时间。应该注意这个超时一般不可能大于 75 秒。默认 60s")])]),t._v(" "),a("h4",{attrs:{id:"proxy-read-timeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-read-timeout"}},[t._v("#")]),t._v(" proxy_read_timeout")]),t._v(" "),a("blockquote",[a("p",[t._v("定义从后端服务器读取响应的超时。此超时是指相邻两次读操作之间的最长时间间隔，而不是整个响应传输完成的最长时间。如果后端服务器在超时时间段内没有传输任何数据，连接将被关闭。")])]),t._v(" "),a("h4",{attrs:{id:"proxy-send-timeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-send-timeout"}},[t._v("#")]),t._v(" proxy_send_timeout")]),t._v(" "),a("blockquote",[a("p",[t._v("定义向后端服务器传输请求的超时。此超时是指相邻两次写操作之间的最长时间间隔，而不是整个请求传输完成的最长时间。如果后端服务器在超时时间段内没有接收到任何数据，连接将被关闭。")])]),t._v(" "),a("h4",{attrs:{id:"proxy-pass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-pass"}},[t._v("#")]),t._v(" proxy_pass")]),t._v(" "),a("blockquote",[a("p",[t._v("设置后端服务器的协议和地址")])])])}),[],!1,null,null,null);e.default=s.exports}}]);