// 引用自定义的模块，需要指定模块路径
const ls = require('./ls_module.js');

const file = process.argv[2];
const ext = process.argv[3];

/**
 * 1. 回调函数所接受的参数，在这里是 err, list，是在模块实现中指定的。
 * 2. ls_module.js 中指定 callback 回调使用 err list 两个参数调用，则在此处，也是这样。
 */
ls(file, ext, (err, list) => {
	if (err) return console.log(err);  // early-return-error

	list.forEach(name => console.log(name));
});