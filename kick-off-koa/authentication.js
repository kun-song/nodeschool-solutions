/**
 * 简单的 login logout 
 * 
 * 1. /       -> 若用户已经登录，则返回 hello world，否则返回 401 错误
 * 2. /login  -> 若请求为 GET，则返回一个表单，
 *                若请求为 POST，则验证请求，并试图登录，登录成功，重定向到 /
 * 3. /logout -> 退出登录，重定向到 /login
 */
const Koa = require('koa');
const koaBody = require('koa-body');
const session = require('koa-session');

const form = '<form action="/login" method="POST">\
      <input name="username" type="text" value="username">\
      <input name="password" type="password" placeholder="The password is \'password\'">\
      <button type="submit">Submit</button>\
    </form>';

const app = new Koa();

app.keys = ['one', 'two'];
app.use(session(app));

app.use(koaBody());

app.use(function* (next) {
  if (this.path !== '/') {
    return yield next;
  }
  // this.session.authentication 存在 -> 用户已登录
  if (this.session.authentication) {
    this.body = 'hello world';
  } else {
    this.redirect('/login');
  }
  // 未登录
  this.status = 401;
});

app.use(function* (next) {
  if (this.path !== '/login') {
    return yield next;
  }

  if (this.method === 'GET') {
    this.body = form;
  }

  if (this.method === 'POST') {
    const username = this.request.body.username;
    const password = this.request.body.password;
    if (username === 'username' && password === 'password') {
      this.session.authentication = true;
      this.redirect('/');
    } else {
      this.status = 400;
    }
  }
});

app.use(function* (next) {
  if (this.path !== '/logout') {
    return yield next;
  }
  this.redirect('/login');
  this.session.authentication = false;
});

app.listen(process.argv[2]);
