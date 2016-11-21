/**
 * 模板
 */
const Koa = require('koa');
const views = require('co-views');

const app = new Koa();

/**
 * 模板默认路径，默认后缀
 */
const render = views(__dirname + '/views', {
  default: 'ejs'
});

// dummy data
const dog = {
  name: {
    firstname: 'Tobi',
  },
  species: 'ferret',
  age: 3
};

app.use(function* () {
  if (this.path !== '/') {
    return yield next;
  }
  /**
   * 1. XX.ejs 模板中的 user 通过 {user: xx} 传入，若 XX.ejs 中使用 dog 中未定义的属性，
   * 不会报错，认为该属性为空。
   * 2. 因为指定默认后缀为 .ejs，所以直接写 user 即可。
   */
  this.body = yield render('user', {user: dog});
});

app.listen(process.argv[2]);