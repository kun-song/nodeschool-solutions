/**
 * 题目：实现一个模块，输出一个双工流，该流介绍一个以 \n 分隔的 JSON 列表，输出一个以 \n 分隔
  * 的 JSON 列表，中间实现对 JSON 数据的统计。
 *
 * 1. 使用 split 对输入流进行分割，分别处理每个 JSON
 * 2. 中间使用 through2 构造处理流，完成对 JSON 的处理
 * 3. 最后使用 zlib 压缩 JSON
 */
const combine = require('stream-combiner');
const through = require('through2');
const zlib = require('zlib');
const split = require('split');

function duplex() {
  /**
   * line 最初未定义，在 write 函数中，首先检查其是否定义，这样可以保证第一次不输出未定义
   * 的 line
   */
  let line;

  function write(row, _, next) {
    if (row.length === 0) {  // split 分割之后，第一个输入是空
      return next();
    }
    const current = JSON.parse(row);  // string -> JSON，之后才能提取 JSON 各个属性

    if (current.type === 'genre') {
      if (line){  // line 已定义，则输出一个 JSON
        this.push(JSON.stringify(line) + '\n');  // JSON -> string
      }
      line = {name: current.name, books: []}
    } else if(current.type === 'book') {
      line.books.push(current.name);
    }

    next();
  }

  function end(done) {
    if (line) {  // 输出最后一个 JSON
      this.push(JSON.stringify(line) + '\n');
    }
    done();
  }

  const operation = through(write, end);  // 处理流，双工

  return combine(split(), operation, zlib.createGzip());
}

module.exports = duplex;
