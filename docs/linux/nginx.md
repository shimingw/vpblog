---
title: "nginx"
date: 2019-07-01
permalink: "2019-07-01-linux-nginx"
---



### http协议
#### 请求头
`Connection`：close和keep-alive。是否支持长连接。长连接可以重用http请求资源，减少资源开销
`Host`：发起请求的域名或者ip
`etag`：被请求变量的实体值，nginx会给每个静态资源打上一个etag标签，客户端每次请求的时候会带上`If-None-Match`如果nginx的资源没有发生变化，则Etag标签不会发生改变。浏览器会返回304，服务器就从缓存中读取资源。




### 常用变量
- `$http_host`：客户端请求头中携带的host
- `$host`：nginx服务器的域名或者ip
- `$proxy_port`：**proxy_pass**对应后端服务器的端口
- `$remote_addr`：用户ip
- `$proxy_add_x_forwarded_for`：添加用户ip和每次nginx反向代理服务器的ip用逗号隔开，起到一个溯源的作用。

### 常用指令
#### proxy_set_header
> 允许重新定义或者添加发往后端服务器的请求头

##### Host
默认情况下，只有两个请求头会被重新定义：`Host`和`Connection`

如果不想改变请求头“Host”的值，可以这样来设置：
`proxy_set_header Host       $http_host;`

#### websocket
nginx代理转发websocket请求
```
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

#### 	proxy_connect_timeout
> 设置与后端服务器建立连接的超时时间。应该注意这个超时一般不可能大于75秒。默认60s


#### proxy_read_timeout
> 定义从后端服务器读取响应的超时。此超时是指相邻两次读操作之间的最长时间间隔，而不是整个响应传输完成的最长时间。如果后端服务器在超时时间段内没有传输任何数据，连接将被关闭。

#### proxy_send_timeout
> 定义向后端服务器传输请求的超时。此超时是指相邻两次写操作之间的最长时间间隔，而不是整个请求传输完成的最长时间。如果后端服务器在超时时间段内没有接收到任何数据，连接将被关闭。

#### proxy_pass
> 设置后端服务器的协议和地址