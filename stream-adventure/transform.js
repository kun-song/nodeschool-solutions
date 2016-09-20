/**
 * 题目：将 process.stdin 中的输入数据转换为大写，输出到 process.stdout 中。
 * 
 * 1. transform stream: input stream -> some operations -> output stream
 * 2. 下划线：表明此处需要有个参数，但函数中并无使用，懒得起名字了，所以简单用下划线代替
 */
const through = require('through2');

const stream = through(function(buffer, _, next) {
	this.push(buffer.toString().toUpperCase());
	next();
});
process.stdin.pipe(stream).pipe(process.stdout);  // 链式调用，串联 Stream
