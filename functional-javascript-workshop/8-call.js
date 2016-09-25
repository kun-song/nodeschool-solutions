/**
 * 1. 使用 {} 创建的对象默认继承 Object.prototype 的方法。
 * 2. 使用 call 方法可以使用其他对象的方法，比如 duck 对象如果不继承 Object 则无
 *    hasOwnProperty 这个方法，但使用 call 则可以在 duck 上调用 hasOwnProperty 方法。
 */
function duckCount() {
  return Array
    .from(arguments)  // 转化为数组
    .reduce((count, duck) => {
      if (Object.prototype.hasOwnProperty.call(duck, 'quack')) {
        count++;
      }
      return count;
    }, 0);
}

module.exports = duckCount;
