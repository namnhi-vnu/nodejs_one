const path = require('path');

console.log(path.sep);

// nối chuỗi dấu \
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// lấy tên trong file 
const base = path.basename(filePath);
console.log(base);

//đường dẫn tuyệt đối resolve

const absolute = path.resolve(__dirname, '/content', 'subfolder', 'test.txt');
console.log(absolute);