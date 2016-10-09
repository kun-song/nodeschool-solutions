/**
 * 根据 Schema 生成 Model，并暴露给外界，model 就是一个类，用来创建 document，
 */
var mongoose = require('mongoose');
var EquipmentSchema = require('./EquipmentSchema');

var Equipment = mongoose.model('Equipment', EquipmentSchema);

module.exports = Equipment;
