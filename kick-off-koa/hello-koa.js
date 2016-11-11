/**
 * 1. Koa 将 Node.js 中原生 request & response 对象包裹到一个上下文对象中，并提供一些使用方法
 * 2. 在 Koa 的中间件中，使用 this 来访问 Koa 上下文对象
 */

const Koa = require('koa');

const app = new Koa();
const port = process.argv[2];

app.use(function* () {
    this.body = 'hello koa';
});

app.listen(port);