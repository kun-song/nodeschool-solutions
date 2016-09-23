/**
 * Array.prototype.filter(callback(element, index, array))
 *
 * Create an array with all element that pass the *test* of the callback
 *
 * 1. 过滤：选择 callback 调用结果为 true 的元素，组成新数组。
 */
function getShortMessages(messages) {
  return messages
    .map(item => item.message)
    .filter(message => message.length < 50);
}

module.exports = getShortMessages;
