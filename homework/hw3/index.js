const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const pathToFile = path.join(__dirname, 'counters.json');
let countersData;

try {
    countersData = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
} catch (err) {
    countersData = { "home": 0, "about": 0 };
    fs.writeFileSync(pathToFile, JSON.stringify(countersData), 'utf8');
}

function writeToJSON(path, data) {
    fs.writeFileSync(path, JSON.stringify(data), 'utf8');
}

// Корневая страница
app.get('/', (req, res) => {
    countersData.home++;
    writeToJSON(pathToFile, countersData);
    res.send(`<h1>Home</h1><p>Views: ${countersData.home}</p><a href='/about'>About</a>`);
});

// Страница About
app.get('/about', (req, res) => {
    countersData.about++;
    writeToJSON(pathToFile, countersData);
    res.send(`<h1>About</h1><p>Views: ${countersData.about}</p><a href='/'>Home</a>`);
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});