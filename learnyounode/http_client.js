/**
 * 题目：发起一个 HTTP GET 请求，请求的 URL 为命令行参数的第一个。然后将每一个 "data" 事件所得的数据，
 * 以字符串形式在终端（标准输出 stdout）的新的一行打印出来。
 * 
 * 知识点：
 * 1. Node.js 使用 HTTP 模块完成各类网络请求，主要有 http.request() http.get() 两个方法，前者可以指定请求方法，
 * 后者默认使用 GET 方法，因为大部分请求都是 GET，所以直接抽取出来，方便使用。
 * 2. response 是 Stream 对象，具有几个典型事件：data error
 *
 * 注意：
 */
const http = require('http');

const url = process.argv[2];  // 请求 URL，命令行输入

http.get(url, (res) => {
	res.setEncoding('utf-8');
	// res.on('data', data => console.log(data));
	res.on('data', console.log);  // 监听 response 的 data 事件
	res.on('error', console.error);  // 监听 error 事件
});