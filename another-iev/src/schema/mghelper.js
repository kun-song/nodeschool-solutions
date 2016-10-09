// devices
var Equipment = require('../schema/EquipmentModel.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:test');
const db = mongoose.connection;

module.exports.getDevices = function() {
  // 错误处理
  db.on('error', console.error.bind(console, 'connection error:'));
  // 连接成功
  db.once('open', function() {
    Equipment.find(function(err, equipments) {
    if (err) return console.error(err);
    console.log('Find devices from db', equipments);
    });
  });
}
