/**
 * 题目：有三个 URL 作为前三个命令行参数提供给你，需要收集每一个 URL 所返回的完整内容，然后将它们在终端（标准输出stdout）打印出来。
 * 这次你不需要打印出这些内容的长度，仅仅是内容本身即可（字符串形式）；每个 URL 对应的内容为一行。
 * 必须按照 URL 在参数列表中的顺序，将相应的内容排列打印出来才算完成。
 *
 * 1. 按照 URL 提供的顺序打印请求结果。需要协调三个 HTTP 请求，异步，顺序不可控。
 * 2. 回调计数：使用一个全局 counter，每次在 end 事件中执行 counter++，然后判断 counter 是否为 3，为 3 表明三个请求都已经 end.
 * 3. 保证顺序：URL 请求的顺序，就是打印顺序，需要将返回的结果与 URL 顺序关联起来。
 * 4. 为什么将 http.get() 封装在一个 get() 函数中呢？
 *    （1）如果直接将 http.get 放在 for 中，则 http.get 中使用的 index 是 for 执行完毕后的 index，始终为 3。
 *    （2）包装之后，由于闭包，每次 index 的赋值都会被 http.get 正确获取。
 *    （3）参考程序，也是将 http.get 封装，使用闭包保存 index 每次的实际值。
 */
const http = require('http');

const url_array = [process.argv[2], process.argv[3], process.argv[4]]

const results = [];
const temp = {};

var counter = 0;
for (let index = 0; index < url_array.length; index++) {
	get(url_array[index], index);
}

function get(url, index) {
	http.get(url, (res) => {
		let str = '';
		res.setEncoding('utf-8');
		res.on('data', data => {
			str += data;
		});
		res.on('end', () => {
			results[index] = str;  // 保证顺序
			counter++;

			if (counter === 3) {  // 回调计数
				results.forEach(line => console.log(line));
			}
		});
	});
}