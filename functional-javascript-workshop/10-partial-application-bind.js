/**
 * Partial Application
 *
 * 1. 使用 bind 实现
 * 2. bind 创建绑定函数，所以无需像 apply 一样用一个匿名函数包裹
 */
function logger(namespace) {
  return console.log.bind(console, namespace);
}

module.exports = logger;
