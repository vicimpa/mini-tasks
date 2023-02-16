const { test } = require("./lib/test");

function isPalindrom(str = '') {
  const center = str.length / 2 | 0;

  for (let i = 0; i < center; i++) {
    if (str[i] !== str[str.length - 1 - i])
      return false;
  }

  return true;
}

test(isPalindrom, [
  ['topot', true],
  ['level', true],
  ['that', false]
]);