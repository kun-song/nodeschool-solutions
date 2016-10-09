var mongoose = require('mongoose');
var Equipment = require('./schema/EquipmentModel.js');

const devices = require('./devices');

mongoose.connect('mongodb://localhost:test');
var db = mongoose.connection;

// console.log(devices);

// 错误处理
db.on('error', console.error.bind(console, 'connection error:'));
// 连接成功
db.once('open', function() {
	devices.forEach(device => {
		device.save(function(err) {
				if (err) return console.error(err);
				console.log('Insert this device to db: ', device);
			});
	});
	// Equipment.remove(function(err, res) {
	// 	if (err) return console.error(err);
	// 	console.log('删除成功');
	// });
});

// 查询所有设备信息
// app.get('/equipments', function(req, res) {
// 	console.log('hello first get');
// 	Equipment.find(function(err, equipments) {
// 		if (err) return console.error(err);
// 		// 以 JSON 返回查询结果
// 		res.status(200).send(JSON.stringify(equipments));
// 		console.log(equipments);
// 	});
// });
