/**
 * 本例主要说明多个 middleware 之间以及 middleware 内部的执行顺序。
 */
const Koa = require('koa');

const app = new Koa();

app.use(responseTime());
app.use(upperCase());

app.use(function* () {
  this.body = 'hello koa';
});

// 记录每个 request 从进入到响应的时间
function responseTime() {
  return function* (next) {
    const begin = Date.now();
    /**
     * 遇到 yield next 则停止当前 middleware 的执行，跳转到下个 next 指定的 middleware，
     * 当所有 middleware 都执行结束后，回到此处执行下面的语句。
     */
    yield next;
    this.set('X-Response-Time', Date.now() - begin);
  }
}

// 将所有 response body 转换为大写 
function upperCase() {
  return function* (next) {
    yield next;
    this.body = this.body.toUpperCase();
  }
}

app.listen(process.argv[2]);