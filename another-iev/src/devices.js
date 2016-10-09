var mongoose = require('mongoose');
const Equipment = require('./schema/EquipmentModel.js');

const devices = [];

	var e1 = new Equipment({
		class: '统一',
		ip: '100.130.127.132',
		user: 'kun',
		passwd: 'csbt32d',
		ipmi_addr: '100.100.10.129',
		ipmi_user: 'user',
		ipmi_passwd: 'passwd',
		location: '0405',
		os: 'unix',
		others: '组网之类的信息'
	});
  devices.push(e1);

	var e2 = new Equipment({
		class: '海量',
		ip: '100.130.127.132',
		user: 'kyle',
		passwd: 'ydhl12s',
		ipmi_addr: '100.130.127.133',
		ipmi_user: 'admin',
		ipmi_passwd: 'ydhl12s',
		location: '0405',
		os: 'unix',
		others: '组网之类的信息'
	});
  devices.push(e2);

module.exports = devices;
