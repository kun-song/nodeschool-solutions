/**
 * Partial Application 局部应用
 *
 * 1. 一种转换技巧，通过预先传入参数，将多元应用变成少元应用、一元应用
 * 2. 将 arguments 转为为数组的两种方式：
 *    （1）Array.prototype.slice.call(arguments)
 *    （2）Array.from(arguments)
 */
function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(Array.from(arguments)));
  }
}

module.exports = logger;
