/**
 * fs.createReadStream() 创建一个 ReadStream，可以使用 pipe 链接到其他的 WriteStream
 */
const fs = require('fs');
const file = process.argv[2];

fs.createReadStream(file).pipe(process.stdout);