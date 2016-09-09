/**
 * 功能：打印指定目录下的文件列表，并以给定的扩展名来过滤
 * 
 * 知识点：
 * 1. fs.readDir(file, callback(err, list)) 异步读，file 为目录，list 是读取结果，一个文件名组成的字符串数组
 * 2. 提取文件后缀 path 模块的 extname() 方法
 */
const fs = require('fs');
const path = require('path');

const file = process.argv[2];  // 命令行提供的目录
const ext = '.' + process.argv[3];  // 命令行提供的后缀
fs.readdir(file, (err, list) => {
	if (err) console.log(err);
	
	list.forEach(name => {
		if (path.extname(name) === ext) {
			console.log(name);
		}
	});
});