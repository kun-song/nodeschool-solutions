/**
 * 将 repeat 异步化
 *
 * 1. repeat 可以被中断
 * 2. repeat 不阻塞 event loop
 *
 * 思路：使用定时任务，定时执行 repeat，则定时交还程序的控制权，可以让其他程序打断 repeat
 *      的执行。
 */
const timer = require('timers');

function repeat(operation, num) {
  if (num <= 0)  return;

  operation();

  timer.setInterval(function() {
    return repeat(operation, --num);
  }, 2);
}

module.exports = repeat;
