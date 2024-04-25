'use strict'

const path = require('path');
const fs = require('fs');

const person = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 25,
    city: 'Moscow'
};

const pathToFile = path.join(__dirname, 'person.join');

fs.writeFileSync(pathToFile, JSON.stringify(person, null, 4), (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Файл person.join успешно создан');
});