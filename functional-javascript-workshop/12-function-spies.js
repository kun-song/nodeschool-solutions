/**
 * 监听 target 上 method 函数调用次数
 *
 * 1. 实现思路：修改 target.method 的默认行为，在原有行为之上，添加计数功能
 * 2. 计数是在闭包中完成的，每次调用 Spy 函数都会创建不同的 counter 对象，每个闭包保持自己的
 *    counter 对象，保证不同的 method 计数可以分开。
 */
function Spy(target, method) {
  const counter = {count: 0};

  const oldMethod = target[method]; // method 是 target 对象的属性，所以用 [] 语法

  // 修改 target[method] 属性值，即函数体
  target[method] = function() {
    oldMethod.apply(target, arguments); // 原有行为
    counter.count++;  // 计数
  }

  return counter;
}

module.exports = Spy;
