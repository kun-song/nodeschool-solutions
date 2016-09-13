/**
 * 题目：发起一个向 http://localhost:8099 的 POST request，将 stdin pipe 到该 request,
 * 将 response stream pipe 到 stdout
 *
 * 1. 涉及 request 模块，该模块简化了 http 请求操作
 * 2. post 方法返回的是一个 readable & writable stream，可以使用 pipe 链接
 */
const request = require('request');

const stream = request.post('http://localhost:8099');;

process.stdin
  .pipe(stream)
  .pipe(process.stdout);
