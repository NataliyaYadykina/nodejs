'use strict'

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('static'));

// Корневая страница
// app.get('/', (req, res) => {
// res.sendFile('static/index.html');
// res.send("<h1>Home</h1><a href='/about'>About</a>");
// });

// app.get('/about', (req, res) => {
// res.sendFile('static/about.html');
// res.send("<h1>About</h1><a href='/'>Home</a>");
// });

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});