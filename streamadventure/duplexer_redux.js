/**
 * 题目：创建一个导出函数，接受一个名为 counter 的 readable stream，返回一个 duplex stream，
 * 以 counter 作为其 readable side，
 *
 * 1. through 屏蔽不同 Node.js 版本对于 Stream 的不同创建规则和依赖
 * 2. duplexer 创建的是 duplex stream，第一个参数是 writable stream，第二个是
 * readable stream
 */
const duplexer = require('duplexer2');
const through = require('through2').obj;

function redux(counter) {
  const count = {};

  const input = new through(function(row, _, next) {  // 预处理
    count[row.country] = (count[row.country] || 0) + 1;
    next();
  }, function(done) {  // 输入结束
    counter.setCounts(count);
    done();
  });

  return duplexer({objectMode: true}, input, counter);
}

module.exports = redux;
