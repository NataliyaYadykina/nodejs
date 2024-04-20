'use strict';

const calc = require('yn-math-calc');

const sumResult = calc.sum(2, 4); // 6
console.log(sumResult);

const subResult = calc.sub(7, 4); // 3
console.log(subResult);

const multResult = calc.mult(3, 5); // 15
console.log(multResult);

const divResult = calc.div(10, 2); // 5
console.log(divResult);

const divResult2 = calc.div(10, 0); // "You can not divide by zero."
console.log(divResult2);
