/**
 * 1. JavaScript 中主要有三种作用域：全局作用域、函数作用域、块作用域
 * 2. var 创建全局 & 局部，let/const 创建块作用域。
 *    * var 在当前 lexical scope 创建变量，如果是函数内部，则为函数作用域，如果不在任何函数
 *      内部，则为全局作用域。
 *    * let 块作用域
 *
 * 3. ES5 中的 IIFE 本质是创建块作用域，有 const/let 之后，没有必要继续使用。
 *
 * 4. 作用域链：从最内层作用域（函数、块）向最外层延展，形成一条链，叫做作用域链（scope chains）

      作用域链的结尾是一个 global scope object，在浏览器中是 window 对象，在 node.js 中
      是 global 对象。

      (global)
          ↑
          |
      someFunc()
          ↑
         / \
        /   \
       /     \
   inner()  inner2()
              ↑
              |
            foo()

 * 5. 使用 var let 定义变量，系统会根据当前位置的作用域来决定变量的作用域，如果省略 var let
 *    则系统 *假设该变量在外部作用域中存在*，定义语句变成 *赋值语句* ，按照以下步骤计算：
 *    （1）搜寻当前作用域
 *      （2）不存在，则搜寻直接外层作用域
 *      （3）存在，到（6）
 *      （4）外层作用域不存在，重复（2），直到全局作用域
 *      （5）全局作用域不存在，则在（windows/global object) 上 *创建* 该变量
 *    （6）赋值
 *
 *    总结：查找，（1）存在，则赋值，（2）不存在，则创建，然后赋值。
 *
 *    两个后果：
 *    (a) 一个简单的赋值操作，可能会错误创建全局变量，在第（5）步中。
 *    (b) 漏掉 var let，让原本的局部作用域变量，变成全局，导致所有函数都可以访问！
 *
 * 6. 闭包：是函数，其上下文包含函数体之外的变量。
 */

/**
  1. quux 定义在 zip 函数中，但是 foo 函数试图对其赋值，根据上面 5 中的算法，会在全局作用域
    创建一个全局对象 global.quux，在 zip 中，局部 quux 会遮挡全局 quux，但在其他地方的函数
    都会访问全局 quux.
*/
// function foo() {
//   var bar;
//   quux = 'foo';
//   function zip() {
//     var quux = 'zip';
//   }
// }

/**
  1. 最简单的闭包，close over the variable bar inside zip().
  2. foo 函数返回 zip 函数，zip 中包含了外部的 bar 变量，zip 变成了一个闭包。
*/
function foo() {
  var bar;
  quux = 'foo';
  function zip() {
    bar = true;
    var quux = 'zip';
  }
  return zip;
}
