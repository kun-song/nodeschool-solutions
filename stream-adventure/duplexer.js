/**
 * 题目：创建一个模块，该模块只有一个函数，该函数接受一个 cmd 字符串和 args 数组，使用 cmd
 * 和 args 创建一个子进程，然后将该进行的 stdin stdout 组合为一个双工流。
 *
 * 1. Child Process 模块
 * 2. duplexer2 接受 read stream & write stream，返回一个 duplex stream
 */
const spawn = require('child_process').spawn;
const duplexer = require('duplexer2');

module.exports = function(cmd, args) {
  const _ps = new spawn(cmd, args);
  return duplexer(_ps.stdin, _ps.stdout);  // 顺序不能变
};
