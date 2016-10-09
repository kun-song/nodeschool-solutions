/**
 * 模式定义，创建每个设备的 Schema，简化版本
 */
var mongoose = require('mongoose');
var equipment_schema = mongoose.Schema({
	// 分类，统一、海量
	class: String,

	// 基本 IP 信息
	ip: String,
	user: String,
	passwd: String,

	// IPMI 信息
	ipmi_addr: String,
	ipmi_user: String,
	ipmi_passwd: String,

	location: String,  // 在机柜上的位置
	os: String,  // 操作系统

	others: String  // 其他信息
});

module.exports = equipment_schema;
