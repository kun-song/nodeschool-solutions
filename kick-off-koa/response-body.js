/**
 * Koa 的 response body 可以是：
 * （1）Strings （2）Buffers (3)Streams (4) JSON Objects
 * 其中如果是 Stream，则 Koa 会自动添加 error handler
 */

const Koa = require('koa');
const fs = require('fs');

const app = new Koa();

// 请求 /json 返回 response body 为 JSON 对象
app.use(function* (next) {
  if (this.path !== '/json') {
    return yield next;
  }
  this.body = {
    foo: 'bar'
  };
});

// 请求 /stream 返回 response body 为 Stream
app.use(function* (next) {
  if (this.path !== '/stream') {
    return yield next;
  }
  this.body = fs.createReadStream(process.argv[3]);
});

app.listen(process.argv[2]);