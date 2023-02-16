const { test } = require("./lib/test");

function sum(a = 0, b = 0) {
  return a + b;
}

test(sum, [
  [1, 2, 3],
  [2, 5, 7],
  [3, 4, 7],
  [1, 1, 5]
]);