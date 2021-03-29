//commonJs, every file is module (by default)
//modules - encapsulated code (only share minimum)
// sử dụng require để import file cần sử dụng

const names = require('./4-names');
const sayHi = require('./5-util');
//const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
//truy cập các modules được require
sayHi('Nguyễn Thúy Hằng');
sayHi(names.firstName);
sayHi(names.lastName);
console.log(data);