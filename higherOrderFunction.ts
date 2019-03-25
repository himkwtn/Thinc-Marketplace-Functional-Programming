const mathOperation = (operator, a, b) => operator(a, b);
const add = (a, b) => a + b;
const minus = (a, b) => a - b;

mathOperation(add, 1, 2); // 1 + 2 => 3
mathOperation(minus, 3, 4); // 3 - 4 => 4

const numbers = [1, 2, 3, 4, 5, 6];

numbers.map(x => x + 1); // [2, 3, 4, 5,  6]

numbers.filter(x => x > 3); // [4, 5,  6]

numbers.reduce((a, b) => a + b); // 21
