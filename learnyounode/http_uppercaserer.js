/**
 * 题目：编写 HTTP 服务器，只接受 POST 请求，将 POST 请求 body 中的字符转换为大写，返回给客户端。
 *
 * 1. request response 都是 Stream 对象，要完成的是在 request -> response 写的过程中进行大小写转换，
 * 可以使用 through2-map 模块完成。
 * 2. 边流动，边转换。
 */
const http = require('http');
const map = require('through2-map');

const port = Number(process.argv[2]);  // 监听端口，命令行指定

const server = http.createServer((req, res) => {
	if (req.method === 'POST') {
		req.pipe(map(data => {  // Stream 的威力
			return data.toString().toUpperCase();
		})).pipe(res);
	}
});
server.listen(port);