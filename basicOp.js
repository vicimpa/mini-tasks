const { test } = require("./lib/test");

const OPERATORS = {
  '+': (a = 0, b = 0) => a + b,
  '-': (a = 0, b = 0) => a - b,
  '/': (a = 0, b = 0) => a / b,
  '*': (a = 0, b = 0) => a * b
};

/**
 * @param {keyof typeof OPERATORS} op 
 * @param {number} a 
 * @param {number} b 
 */
function basicOp(op, a, b) {
  return OPERATORS?.[op](a, b) ?? NaN;
}

test(basicOp, [
  ['+', 4, 7, 11],
  ['-', 15, 18, -3],
  ['*', 5, 5, 25],
  ['/', 49, 7, 7]
]);
