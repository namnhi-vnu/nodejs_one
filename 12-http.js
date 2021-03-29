const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to Home page');
    }
    if (req.url === '/about') {
        res.end('Welcome to about page');
    }
    res.end(`
    <h1>Oop!!!</h1>
    <p>Sorry i not to Page</p>
    <a href="/">Go to home page</a>
    `)
})
server.listen(3000);