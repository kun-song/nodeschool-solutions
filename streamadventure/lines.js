/**
 * 题目：将 process.stdin 做转换，输出到 process.stdout 中，规则：奇数行小写，偶数行大写。
 *
 * 1. 使用 split 模块将输入流按照 \n 分割
 * 2. 使用一个 Boolean 类型的标志来判断奇数、偶数行
 */
const through = require('through2');
const split = require('split');

let even = true;
const stream = through(function(buffer, _, next) {  // 注意，此处不可使用箭头函数，因为内部使用了 this，箭头函数无 this
	const line = buffer.toString()
	if (even) {
		this.push(line.toLowerCase() + '\n');
	} else {
		this.push(line.toUpperCase() + '\n');
	}
	even = !even;
	next();
});

process.stdin
	.pipe(split())
	.pipe(stream)
	.pipe(process.stdout);