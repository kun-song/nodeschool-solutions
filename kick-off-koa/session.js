/**
 * 使用 session 存储访问次数，功能与 cookies.js 相同
 */
const Koa = require('koa');
const session = require('koa-session');
const app = new Koa();

// koa-session 模块基于 cookies，需要设置 app.keys 才能使用
app.keys = ['secret'];
app.use(session(app));

app.use(function* () {
  if (this.path !== '/') {
    return yield next;
  }
  const times = this.session.views || 1;
  this.session.views = times + 1;
  this.body = times + ' views';
});

app.listen(process.argv[2]);