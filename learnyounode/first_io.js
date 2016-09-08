/**
 * 功能：执行同步文件操作，读取一个文件，打印该文件行(\n)数，类似执行 cat file | wc -l，文件路径由命令行提供
 * 
 * 知识点：
 * 1. Node 文件操作模块：fs，fs 是对 POSIX 文件操作的简单封装，每个方法都提供同步 & 异步版本。
 * 2. 同步文件读取 fs.readFileSync(path, options)，返回文件内容 Buffer
 *
 * 注意：
 *	1. 下面两种实现方式，第一种因为指定了编码方式为 utf-8，所以 contents 是字符串；第二种返回的是 Buffer，需要手动 toString()
 *	2. fs.readFileSync() 为同步方法，即文件内容作为返回值返回，需要等待 readFileSync() 完成之后，才能继续下去
 */

const fs = require('fs');
const path = process.argv[2];  // 命令行提供文件路径

const contents = fs.readFileSync(path, 'utf-8');  // contents 为文件内容
const lines = contents.split('\n').length - 1;

// const contents = fs.readFileSync(path);
// const lines = contents.toString().split('\n').length - 1;

console.log(lines);