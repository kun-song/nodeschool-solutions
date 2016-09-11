/**
 * 题目：编写 HTTP 服务器，
 * (1)当接受到 '/api/parsetime' 路径的 GET 请求时，响应一些 JSON 数据
 * 请求包含一个 query string，其 key 为 iso，值为 ISO 格式的时间，比如：
 * /api/parsetime?iso=2013-08-10T12:10:15.474Z，
 * 所响应的 JSON 包含三个属性，例如 {'hour': 14, 'minute': 23, 'second': 15}
 * (2) 增加一个借口，接受路径为 '/api/unixtime'，查询参数与（1）相同，返回 JSON 包含一个 unixtime 属性，其值为 UNIX 时间戳。
 * 比如：{'unixtime': 1376136615474 }
 *
 * 1. response 要响应请求，首先应该 response.writeHead()，先进行相关设置，然后 write() 或者 end()。end 也有写的功能。
 * 2. 如果使用 write，则最后必须 end。
 * 3. 使用 url 模块解析请求
 */
const http = require('http');
const url = require('url');

const port = Number(process.argv[2]);
const route_1 = '/api/parsetime';
const route_2 = '/api/unixtime';

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'application/json'});  // 响应头

	const query = url.parse(req.url, true).query;  // 获取查询字符串
	const pathname = url.parse(req.url, true).pathname;  // 路由路径

	if (pathname === route_1) {
		const date = new Date(query['iso']);
		const json = JSON.stringify({  // 构造返回的 JSON 对象
			'hour': date.getHours(),
			'minute': date.getMinutes(),
			'second': date.getSeconds()
		});
		res.write(json);
	} else if (pathname === route_2) {
		const date = new Date(query['iso']);  // 根据请求的 ISO 时间构造 Date
		const json = JSON.stringify({
			'unixtime': date.getTime(),  // getTime() 得到 UNIX 时间戳
		});
		res.write(json);
	} else {
		res.writeHead(404);
	}

	res.end();  // 关闭
});
server.listen(port);