/**
 * 使用 Array.prototype.reduce() 实现一个简易版的 map
 *
 * 1. reduce map 都会遍历数组元素，可以在 reduce 内部处理元素的时候，施加 map 的回调函数 fn，
 *    将每个元素的处理结果保存在 preValue 数组中，最后返回。
 */
function arrayMap(array, fn) {
  return array.reduce((result, cur) => {
    result.push(fn(cur));
    return result;
  }, []);
}

module.exports = arrayMap;
