/**
 * Array.prototype.map(callback(element, index, array))
 *
 * 1. 在原数组的每个元素 element 上调用 callback 函数，将 callback 函数返回值最为新元素，
 *    组成一个新数组。
 * 2. callback 只会作用于 *已经被赋值* 的 index，包括 undefined。
 *    （1）被删除元素 （2）未赋值元素 都不会被调用。
 * 3. 原数组长度在 callback 首次调用之前被确定，callback 调用之后添加的元素不可访问。
 * 4. callback 可以访问期间被修改的元素，期间被删除的则不再访问。
 */
function doubleAll(numbers) {
  return numbers.map(n => 2 * n);
}

module.exports = doubleAll;
