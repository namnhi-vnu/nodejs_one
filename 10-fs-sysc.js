// đọc nội dung trong file
const {
    readFileSync,
    writeFileSync
} = require('fs');

const first = readFileSync('.\\content\\firts.txt', 'utf8');
const second = readFileSync('.\\content\\second.txt', 'utf8');
console.log(first, second);

// tạo và ghi file, thêm đối tượng flag để nối thêm bản ghi file tiếp theo sau cái đã có
writeFileSync('./content/result-sysc.txt', `He write:  ${first} , ${second};`, {
    flag: 'a'
});