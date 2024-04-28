const Joi = require('joi');

const schema = Joi.string();
const result = schema.validate(3);
// console.log(result.error.details);

const schema2 = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().min(1).required(),
    content: Joi.string().min(10).required(),
});

const result2 = schema2.validate({
    id: 1,
    title: '1gfbgffzs',
    content: '1dgazgdaDFEWD',
});

console.log(result2.error?.details);