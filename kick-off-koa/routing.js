/**
 * 路由：根据不同 request path 返回不同 response
 * 
 * 1. 使用 this.path 和 yield next 可以实现路由功能，参考下面例子
 * 2. 注意：Koa 中的 this.path 即为 Node.js 中的 pathname
 */

const Koa = require('koa');

const app = new Koa();
const port = process.argv[2];

// app.use(function* (next) {
//   switch(this.path) {
//     case '/':
//     this.body = 'hello koa';
//     break;
//     case '/404':
//     this.body = 'page not found';
//     break;
//     case '/500':
//     this.body = 'internal server error';
//     break;
//   }
// });

app.use(function* () {
  if (this.path !== '/') {
    return yield next;
  }
  this.body = 'hello koa';
});

app.use(function* () {
  if (this.path !== '/404') {
    return yield next;
  }
  this.body = 'page not found';
});

app.use(function* () {
  if (this.path !== '500') {
    return yield next;
  }
  this.body = 'internal server error';
});

app.listen(port);