/**
 * 检查 request 的 Content-Type 属性
 */
const Koa = require('koa');

const app = new Koa();

app.use(function* (next) {
  // this.is 与 this.request.is 作用相同
  // if (! this.is('application/json')) {
  //   return yield next;
  // }
  // this.body = {message: 'hi!'};

  /**
   * 下面这种实现方式，需要在 if 中添加 return 语句，否则继续向下执行遇到 yield next 后，
   * 会跳转到下个中间件，从而覆盖 this.body，导致所有请求返回值都是 ok
   */
  if (this.is('application/json')) {
    return this.body = {message: 'hi!'};
  }
  yield next;
});

app.use(function* (next) {
  this.body = 'ok';
})

app.listen(process.argv[2]);
