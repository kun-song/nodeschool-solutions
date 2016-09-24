/**
 * 使用递归模拟 Array.prototype.reduce()
 */
function reduce(array, fn, initial) {
  if (array.length === 0)  return initial;

  return reduce(array.slice(1), fn, fn(initial, array[0], 0, array));
}

module.exports = reduce;
