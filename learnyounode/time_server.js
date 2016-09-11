/**
 * 题目：编写一个 TCP 时间服务器  
 *  
 * 你的服务器应当监听一个端口，以获取一些 TCP  
 * 连接，这个端口会经由第一个命令行参数传递给你的程序。针对每一个 TCP  
 * 连接，你都必须写入当前的日期和24小时制的时间，如下格式：  
 *  
 *    "YYYY-MM-DD hh:mm"  
 *  
 * 然后紧接着是一个换行符。  
 *  
 * 月份、日、小时和分钟必须用零填充成为固定的两位数：  
 *  
 *    "2013-07-06 17:42"  
 * 
 * 1. getMonth() 范围是 [0, 11]
 */

const net = require('net');

const port = process.argv[2];

const server = net.createServer(function(socket) {
	const now = new Date();
	const time = now.getFullYear() + '-' 
		+ appendZero(now.getMonth() + 1) + '-' 
		+ appendZero(now.getDate()) + ' ' 
		+ appendZero(now.getHours()) + ':' 
		+ appendZero(now.getMinutes());
	socket.end(time + '\n');
});
server.listen(port);

function appendZero(input) {
	return input < 10 ? '0' + input : input;
}