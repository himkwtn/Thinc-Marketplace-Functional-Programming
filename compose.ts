export const compose = (...functions: Function[]) => input => {
  const func = functions.pop();
  const result = func(input);
  if (functions.length === 0) return result;
  return compose(...functions)(result);
};

const add5 = a => a + 5;
const multiply2 = a => a * 2;
multiply2(add5(1)); // 1 + 5 * 2

const power2 = a => a * a;
const takeLog = Math.log;
const exponential = Math.exp;
exponential(takeLog(power2(multiply2(add5(1)))));

compose(
  exponential,
  takeLog,
  power2,
  multiply2,
  add5
)(1);
