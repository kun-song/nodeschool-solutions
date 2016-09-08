/**
 * 功能：异步文件操作，读取文件，打印文件行数，
 *
 * 知识点：
 * 1. 异步文件读取：fs.readFile()，不再使用返回值处理文件，而是在回调函数中处理。
 * 2. 回调函数：第一个参数为 error，第二个参数为文件内容。
 * 3. 可以通过判断回调的首个参数来判断是否发生错误，如果没有错误，则可以第二个参数获取一个 Buffer 对象
 * 
 * 注意：
 * 与 first_io.js 中不同，文件内容不是作为返回值返回，而是在回调函数内部处理。
 */

const fs = require('fs');
const path = process.argv[2];

fs.readFile(path, 'utf-8', (err, contents) => {  // 回调函数中处理文件内容
	if (err) console.log(err);

	const lines = contents.split('\n').length - 1;
	console.log(lines);
});

// fs.readFile(path, (err, contents) => {  // works too
// 	if (err) console.log(err);

// 	const lines = contents.toString().split('\n').length - 1;
// 	console.log(lines);
// });