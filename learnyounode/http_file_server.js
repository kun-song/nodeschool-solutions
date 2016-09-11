/**
 * 题目：编写 HTTP 文件服务器，响应用户的文件请求。接受两个命令行参数：（1）监听端口 （2）文件位置
 * 
 * 1. http 模块的 createServer() 方法创建一个 HTTP 服务器，（net 模块的同名方法创建的是 TCP 服务器）
 * 2. createServer() 接受一个回调函数作为参数，(request, response)，其中 request/response 都是 Stream 对象，
 * 因此，可以使用流式方法进行链式调用。
 * 3. 回调函数，在服务器每一次连接的时候都会进行。
 * 4. fs.createReadStream(file) 返回一个 ReadStream，然后 pipe 到 response 流中。
 */
const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]);
const file = process.argv[3];

const server = http.createServer((req, res) => {
	res.writeHead(200, {'content-type': 'text/plain'});
	fs.createReadStream(file).pipe(res);
});
server.listen(port);