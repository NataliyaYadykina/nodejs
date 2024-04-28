const express = require('express');
const path = require('path');
const { checkBody, checkParams } = require('./validation/validator');
const { idScheme, userScheme } = require('./validation/scheme');
const func = require('./functions');

const app = express();

let uniqueID = 0;
const filePath = path.join(__dirname, 'users.json');

if (func.isFileExists(filePath) === false) {
    func.createJSON(filePath);
}

app.use(express.json());

/**
 * Получить всех пользователей
 */
app.get('/users', (req, res) => {
    const users = func.getUsers(filePath);
    res.send({ users });
});

/**
 * Получить конкретного пользователя
 */
app.get('/users/:id', checkParams(idScheme), (req, res) => {
    const users = func.getUsers(filePath);
    const user = func.findUser(users, req);

    if (user) {
        res.send({ user });
    } else {
        res.status(404);
        res.send({ users: null });
    }
});

/**
 * Добавление пользователя
 */
app.post('/users', checkBody(userScheme), (req, res) => {
    const users = func.getUsers(filePath);
    let lastUserID = 0;
    if (users.length > 0) {
        lastUserID = users[users.length - 1].id;
    }

    uniqueID = lastUserID + 1;

    users.push({
        id: uniqueID,
        ...req.body
    });

    func.writeUsers(filePath, users);

    res.send({
        id: uniqueID,
    });
});

/**
 * Редактирование пользователя
 */
app.put('/users/:id', checkParams(idScheme), checkBody(userScheme), (req, res) => {
    const users = func.getUsers(filePath);
    const user = func.findUser(users, req);

    if (user) {
        user.name = req.body.name;
        user.surname = req.body.surname;
        user.age = req.body.age;
        user.city = req.body.city;

        func.writeUsers(filePath, users);

        res.send({ user });
    } else {
        res.status(404);
        res.send({ users: null });
    }
});

/**
 * Удаление пользователя
 */
app.delete('/users/:id', checkParams(idScheme), (req, res) => {
    const users = func.getUsers(filePath);
    const user = func.findUser(users, req);

    if (user) {
        const userIndex = users.indexOf(user);
        users.splice(userIndex, 1);

        func.writeUsers(filePath, users);

        res.send({ user });
    } else {
        res.status(404);
        res.send({ users: null });
    }
});

/**
 * Обработка несуществующих роутов
 */
app.use((req, res) => {
    res.status(404).send({
        message: 'URL not found!'
    });
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});