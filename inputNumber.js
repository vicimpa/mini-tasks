const { test } = require("./lib/test");

const makeInput = (n = 0) => {
  return (i = 0) => {
    n *= 10;
    n += i;
    return n;
  };
};

const input = makeInput(0);

test(input, [
  [1, 1],
  [2, 12],
  [3, 123],
  [0, 1230],
  [5, 12305]
]);