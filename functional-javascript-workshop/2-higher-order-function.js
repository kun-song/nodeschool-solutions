/**
 * Higher order function: does at least of the following:
 *
 * 1. Take one or more functions as an input.
 * 2. Output an function.
 *
 * All other functions are *first order functions*.
 *
 * 函数可以保存在（1）普通变量 （2）对象属性，还可以作为函数参数传递。
 *
 * 函数也是对象，函数与其他值不同之处在于：函数体可以被执行。
 */
function repeat(operation, num) {  // 函数作为参数传递
  if (num <= 0)  return;

  operation();
  repeat(operation, --num);  // 递归
}

module.exports = repeat;  // 函数作为对象属性
