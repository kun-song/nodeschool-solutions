/**
 * 题目：创建 HTTP 服务器，将 request stream 转化为大写之后，写入 response stream，返回
 * 给客户端。
 *
 * 1. Node.js 中的 request 和 response 都是 Stream 对象
 * 2. through() 创建的是 Read & Write Stream
 * 3. req.method 属性表明其请求方法是 POST 还是 GET
 */
const through = require('through2');
const http = require('http');

const port = Number(process.argv[2]);  // 监听端口

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(stream).pipe(res);  // 使用 through 流处理字符串大写转换
  } else {
    res.end('This is not a POST request!');  // end() 方法返回客户端提示信息
  }
});
server.listen(port);

// 下面是 through2 的常规用法
const stream = through(write, end);

function write(buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}
function end(done) {
  done();
}
