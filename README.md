# web-novnc

局域网web远程桌面，通过浏览器远程访问 Windows 桌面，浏览器不支持 VNC，所以不能直接连接 VNC，但是可以使用代理，使用 noVNC 通过 WebSocket 建立连接

## 目标：

通过浏览器远程访问 Windows 桌面。

## 原理：

浏览器不支持 VNC，所以不能直接连接 VNC，但是可以使用代理，使用 noVNC 通过 WebSocket 建
立连接，而 VNC Server 不支持 WebSocket，所以需要开启 Websockify 代理来做 WebSocket 和 TCP
Socket 之间的转换。

## noVnc 是什么

noVNC 是一个 HTML5 VNC 客户端，采用 HTML 5 WebSockets, Canvas 和 JavaScript 实现。
noVNC 采用 WebSockets 实现，但是目前大多数 VNC 服务器都不支持 WebSockets，所以 noVNC 是不能
直接连接 VNC 服务器的，需要一个代理来做 WebSockets 和 TCP sockets 之间的转换。这个代理在
noVNC 的目录里，叫做 websockify 。

## 详细操作参考说明文档
