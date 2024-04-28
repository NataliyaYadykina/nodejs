const Joi = require('joi');

const userScheme = Joi.object({
    name: Joi.string().min(1).required(),
    surname: Joi.string().min(1).required(),
    age: Joi.number().min(0).max(100).required(),
    city: Joi.string().min(3),
});

const idScheme = Joi.object({
    id: Joi.number().required(),
});

module.exports = {
    userScheme,
    idScheme,
};