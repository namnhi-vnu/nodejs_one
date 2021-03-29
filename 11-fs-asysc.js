// đọc nội dung trong file
const {
    readFile,
    writeFile
} = require('fs');

readFile('./content/firts.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);

})