export const curriedAdd = a => b => a + b;
curriedAdd(1)(2); // 1 + 2 => 3
const add5 = curriedAdd(5);
add5(2); //  5 + 2 => 7

export const curriedMultiply = a => b => a * b;
