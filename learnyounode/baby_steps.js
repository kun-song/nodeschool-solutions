/**
 * 功能：接收一个或者多个命令行参数，并且在终端（标准输出 stdout）中打印出这些参数的总和
 * 
 * 知识点：
 * 1. 使用全局对象 process 来获取命令行中的参数
 * 2. process.argv 该属性是一个数组，该数组包含了整条命令的所有部分
 * 3. process.argv[0] 是 node，[1] 是当前程序的路径，其余是命令行参数
 * 4. process.argv 数组中的元素为 String 类型，所以要求和，需要使用 Number() 函数转换
 * 
 * 注意：字符串 -> 数字，有两个常用方法，parseInt() 和 Number()，区别是 parseInt() 解析字符串，
 * 当遇到无法解析的非数字字符时，停止解析，返回前面解析的结果，Number() 则将字符串作为整体解析。
 *
 * 比如，s = '3.123aa'，parseInt(s) 返回 3.123，而 Number(s) 返回 NaN
 */

var sum = 0;
for (let i = 2, len = process.argv.length; i < len; i++) {
	sum += Number(process.argv[i]);
}

console.log(sum);
