/**
 * Koa 本身无法解析 request body，需要使用 koa-body 中间件。
 */

const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

/**
 * 1. koa-body 中间件必须在使用 this.request.body 的代码之前。
 */
app.use(koaBody());

/**
 * koa-body 解析后的 body 是 JSON 格式的字符串，例如 {name: 'Cuoco'}，两种方式访问：
 * 1. this.request.body
 * 2. this.req.body
 * 
 * 注意：
 * 1. this.request 中 Koa 包装的请求，this.req 是 Node.js 中原生请求对象
 * 2. 不使用 koa-body，则不存在 this.request.body, this.req.body 这两个对象。 
 */
app.use(function* (next) {
  if (this.method === 'POST') {
    console.log(this.request.body);
    this.body = this.request.body.name.toUpperCase();
  }
});

app.listen(process.argv[2]);

