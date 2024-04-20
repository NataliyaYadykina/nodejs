'use strict';

const calcResult = require('./calc-sum.js');
const colors = require('colors');

const result = calcResult.calculateResultSum([12.1, 32.2, 43.1], 0.9);
const textResult = `Общая стоимость покупок: ${result} рублей.`

console.log((result > 50 ? textResult.green : textResult.red));

// Должен быть результат 78.66
// const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);

// По факту получаем 78.6600000000001
// console.log(`Общая стоимость покупок: ${total} рублей.`);
