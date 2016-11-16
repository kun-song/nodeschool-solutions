/**
 * 捕获 downstream 中抛出的异常。
 * 
 * 使用 try/catch 捕获异常之后，在 app.on('error', ) 中无法再次捕获它，除非手动 emit 错误。
 */
const Koa = require('koa');
const app = new Koa();

app.use(errorHandler());

app.use(function* (next) {
  if (this.path === '/error') {
    throw new Error('ooooop');
  }
  this.body = 'OK';
});

function errorHandler() {
  return function* (next) {
    /**
     * 因为遇到 yield next 之后会暂停 errorHandler，直到后面的 middleware 执行完，
     * 会再次从 try 内部的 yield next 执行，从而捕获所有异常。
     */
    try {
      yield next;
    } catch(error) {
      this.body = 'internal server error';
      this.status = 500;
      // app.emit('error', error);
    }
  }
}

// app.on('error', (err) => {
//   console.log(err);
// })

app.listen(process.argv[2]);