'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end('<h1>Head Page</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end('<h1>About</h1>');
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end('<h1>404 - Page not Found!</h1>');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
