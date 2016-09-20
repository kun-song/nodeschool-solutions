/**
 * 题目：从 process.stdin 接受输入字符串，翻转之后，输出到 process.stdout
 *
 * 1. process.stdin 输入流可能有多个输入，使用 concat-stream 将多个 Buffer 合并成一个
 * 2. concat-stream 是 WriteStream，所以无法在后面继续 pipe(process.stdout)，而是在
 * 回调函数内部将翻转后的字符串使用 console.log() 输出
 */
const concat = require('concat-stream');

const stream = concat( body => {
  body = body.toString().split('').reverse().join('');
  console.log(body);
});

process.stdin.pipe(stream);
