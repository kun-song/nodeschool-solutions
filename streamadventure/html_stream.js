/**
 * 题目：有一些 html 文件写入到 stdin 中，将类名为 loud 的元素的 inner html 转化为大写，
 * 并将所有 html 文件输出到 stdout 中。
 *
 * 1. tr_stream 输出的是 loud 的 inner html，输入的将成为 loud 的 inner html
 */
const trumpet = require('trumpet');
const through = require('through2');

const tr = new trumpet();

const through_stream = new through(function(buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  next();
});

process.stdin.pipe(tr);
const tr_stream = tr.select('.loud').createStream();

tr_stream.pipe(through_stream).pipe(tr_stream)
tr.pipe(process.stdout);
