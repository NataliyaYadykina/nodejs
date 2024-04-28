const express = require('express');
const fs = require('fs');
const path = require('path');
const Joi = require('joi');

const filePath = path.join(__dirname, 'users.json');
let customID = 1;

const scheme = Joi.object({
    name: Joi.string().min(1).required(),
    surname: Joi.string().min(1).required(),
    age: Joi.number().min(0).max(100).required(),
    city: Joi.string().min(3)
});

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.send({ users });
});

app.get('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const user = users.find(user => user.id === Number(req.params.id));
    if (user) {
        res.send({ user });
    } else {
        res.status(404).send({
            message: 'User not found!'
        });
    }
});

app.put('/users/:id', (req, res) => {
    const result = scheme.validate(req.body);
    if (result.error) {
        return res.status(400).send({
            message: result.error.details
        });
    }

    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const user = users.find(user => user.id === Number(req.params.id));
    if (user) {
        user.name = req.body.name;
        user.surname = req.body.surname;
        user.age = req.body.age;
        user.city = req.body.city;
        fs.writeFileSync(filePath, JSON.stringify(users, null, 4), 'utf8');
        res.send({ user });
    } else {
        res.status(404).send({
            message: 'User not found!'
        });
    }
});

app.post('/users', (req, res) => {
    const result = scheme.validate(req.body);
    if (result.error) {
        return res.status(400).send({
            message: result.error.details
        });
    }

    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const user = {
        id: ++customID,
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        city: req.body.city,
    }
    users.push(user);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 4), 'utf8');
    res.send({ user });
});

app.delete('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const userIndex = users.findIndex(user => user.id === Number(req.params.id));
    if (userIndex >= 0) {
        users.splice(userIndex, 1);
        fs.writeFileSync(filePath, JSON.stringify(users, null, 4), 'utf8');
        res.send({ status: 'ok' });
    } else {
        res.status(404).send({
            message: 'User not found!'
        });
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
