var mongoose = require('mongoose');
var Equipment = require('./schema/EquipmentModel.js');

mongoose.connect('mongodb://localhost:test');
var db = mongoose.connection;

// 错误处理
db.on('error', console.error.bind(console, 'connection error:'));
// 连接成功
db.once('open', function() {
	Equipment.remove(function(err, res) {
		if (err) return console.error(err);
		console.log('成功删除所有设备信息');
	});
});
