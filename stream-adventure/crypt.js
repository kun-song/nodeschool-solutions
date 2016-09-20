/**
 * 题目：从 stdin 输入密码，使用 aes256 加密之后输出到 stdout
 */
const crypto = require('crypto');

const password = process.argv[2];
const stream = crypto.createDecipher('aes256', password);

process.stdin.pipe(stream).pipe(process.stdout);
