function sum(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mult(x, y) {
    return x * y;
}

function div(x, y) {
    return (y !== 0) ? x / y : "You can not divide by zero.";
}

module.exports = {
    sum,
    sub,
    mult,
    div,
};