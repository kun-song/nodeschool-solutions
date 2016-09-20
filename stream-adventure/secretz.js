/**
 * 题目：输入压缩、加密过的文件，输出每个文件的 hash 加一个空格加文件名字
 *
 * 1. 更为复杂的流处理，需要根据需求选择不同流
 * 2. 此例中，parser 监听事件中也有流的串联
 */
const crypto = require('crypto');
const zlib = require('zlib');
const tar = require('tar');
const concat = require('concat-stream');

/**
 * 1. 每个文件输入结束，产生一个 entry 事件
 * 2. e 是一个包含文件内容的 read stream
 * 3. e.type: 文件类型，可以是文件、目录，File Directory
 *    e.path: file path
 */
const parser = tar.Parse();
parser.on('entry', e => {  // 文件结束，产生 entry 事件
  if (e.type !== 'File')  return;

  // 双工流，产生输入内容的 hex md5 hash，然后输出
  const md5_stream = crypto.createHash('md5', {encoding: 'hex'});

  e.pipe(md5_stream)  // md5_stream 输出 hash 码
    .pipe(concat( hash => {  // 最终输出流
      console.log(hash + ' ' + e.path);
    }));
});

process.stdin
  .pipe(crypto.createDecipher(process.argv[2], process.argv[3]))  // 解密
  .pipe(zlib.createGunzip())  // 解压
  .pipe(parser);
