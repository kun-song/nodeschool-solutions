/**
 * 功能：该模块完成 ls 功能
 * 
 * 知识点：
 * 1. 实现模块，只需要 module.exports = function(){} 将该函数暴漏给外界即可，使用该模块的代码，需要 requre('./XX'); 
 * 2. 与 require 普通模块相比，自定义的模块需要指定模块所在路径。
 * 
 * 注意：
 * 1. readdir 内部，错误和正常 两种情况需要由模块使用者提供的 callback 函数来处理，
 */

const fs = require('fs');
const path = require('path');

/**
 * 1. 读目录内容时有两种情况，（1）发生错误，此时要停止程序继续向下执行，所以 return （2）正常，不需要 return
 */
function ls(file, ext, callback) {
	// 若此处指定 utf-8 参数，则 verify 的时候出错
	fs.readdir(file, (err, list) => {
		// 1. 发生错误，early-return-error
		if (err) return callback(err);  // callback(err, list); list 省略

		// 2. 正常
		list = list.filter(name => {
			return path.extname(name) === '.' + ext;
		});
		callback(null, list);  // callback(err, list);  err 为 null
	});
}

module.exports = ls;