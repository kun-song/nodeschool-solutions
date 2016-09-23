/**
 * Array.prototype.reduce(callback(preValue, curValue, curIndex, array), initValue)
 *
 * 1. 若不提供 initValue，则 preValue = array[0], curValue = array[1]
 * 2. 若提供 initValue，则 preValue = initValue, curValue = array[0]
 * 3. reduce() 返回值为最后一次调用 callback 的返回值
 * 4. preValue 为上次 callback 的返回值
 */

/**
 * 1. preValue 为 statistics 对象，保存单词的统计量，最后一次 callback 执行结束后，
 *    statistics 作为 reduce() 的结果返回。
 * 2. curValue 为 word，数组中的每个单词
 * 3. preValue curValue 不一定同类型
 */
function countWords(inputWords) {
  return inputWords.reduce((statistics, word) => {
    statistics[word] = ++statistics[word] || 1;  // 初始化、加 1，很巧妙
    return statistics;  // 返回 statistics，供下次 callback 使用
  }, {});  // 初始化 statistics 为空对象
}

module.exports = countWords;
