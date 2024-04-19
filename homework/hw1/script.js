'use strict';

const http = require('http');

let home_counter = 0;
let about_counter = 0;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        home_counter++;
        res.end(`<h1>Head Page</h1><p><a href="/about">About</a></p><p>Views of Home page: ${home_counter}</p>`);
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        about_counter++;
        res.end(`<h1>About</h1><p><a href="/">Home</a></p><p>Views of About page: ${about_counter}</p>`);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end('<h1>404 - Page not Found!</h1><ul><li><a href="/">Home</a></li><li><a href="/about">About</a></li></ul>');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
