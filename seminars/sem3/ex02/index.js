'use strict'

const path = require('path');
const fs = require('fs');

const person = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 25,
    city: 'Moscow'
};

const pathToFile = path.join(__dirname, 'person.json');

fs.writeFileSync(pathToFile, JSON.stringify(person, null, 4), (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Файл person.join успешно создан');
});

const userData = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
console.log(userData);

userData.age -= 10;
userData.city = 'Lipetsk';

fs.writeFileSync(pathToFile, JSON.stringify(userData, null, 4), (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Файл person.join успешно создан');
});

const userDataNew = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
console.log(userDataNew);