/**
 * cookies
 * 
 * Koa 使用 cookies 模块完成 cookie 处理，主要使用两个方法：
 * 1. ctx.cookies.get(key, options)
 * 2. ctx.cookies.set(key, value, options)
 * 
 * options: 
 * （1）signed  -> 是否加密 cookie
 * （2）expires -> 过期
 * （3）path    -> cookie 路径，默认为 '/'
 * （4）domain  -> cookie 域名
 * （5）secure  -> 是否仅在 https 下才发送
 * （6）httpOnly -> 是否只有服务器可以获取 cookie，默认为 true
 */
const Koa = require('koa');
const app = new Koa();

/**
 * 使用加密 cookie，必须设置加密短语 app.keys，app.keys 是一个 String 数组，
 * 其中的字符串被传递到 KeyGrip 中。
 */
app.keys = ['secret', 'keys'];

app.use(function* (next) {
  if (this.path !== '/') {
    return yield next;
  }
  const times = this.cookies.get('view', {signed: true}) || 1;
  this.cookies.set('view', times + 1, {signed: true});

  this.body = times + ' views';
});

app.listen(process.argv[2]);
