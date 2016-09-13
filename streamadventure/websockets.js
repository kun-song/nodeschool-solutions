/**
 * 题目：使用 websocket-stream 打印 hello
 *
 * 1. 可以直接使用 ws.write('hello\n');
 * 2. 也可以使用字符串构造 ReadStream，然后 pipe 到 ws
 * 3. websocket-stream 可以让我们使用 Node.js 的习惯来使用 HTML5 的 websocket
 */
const websocket = require('websocket-stream');
const Readable = require('stream').Readable;

// 使用 String 创建一个 ReadStream
const string_stream = new Readable();
string_stream.push('hello\n');
string_stream.push(null);

const ws = websocket('ws://localhost:8099');

string_stream.pipe(ws);
