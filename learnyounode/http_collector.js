/**
 * 题目：发起一个 HTTP GET 请求，请求的 URL 为所提供给你的命令行参数的第一个。
 * 收集所有服务器所返回的数据（不仅仅包括 "data" 事件）然后在终端（标准输出 stdout）用两行打印出来。
 * 第一行应该是一个整数，用来表示你所收到的字符串内容长度，第二行则是服务器返回给你的完整的字符串结果。
 *
 * 1. 监听 data 事件，每次将返回的数据追加到 response_str 字符串。
 * 2. 监听 end 事件，当传输结束之后，将 response_str 内容打印出来。
 */
const http = require('http');

const url = process.argv[2];  // 请求 URL，命令行输入

http.get(url, (res) => {
	let response_str = '';

	res.setEncoding('utf-8');
	res.on('data', data => {response_str += data});
	res.on('end', () => {
		console.log(response_str.length + '\n' + response_str);
	});
});