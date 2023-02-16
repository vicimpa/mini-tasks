const { test } = require("./lib/test");

/**  @type {{[key: string]: number}} */
const CALC = {};
const CHARS = '0123456789ABCDEF';

for (let i = 0; i < CHARS.length; i++) {
  CALC[CHARS[i]] = i;
}

function hexToInt(string = '') {
  let output = 0;

  for (let i = string.length - 1; i >= 0; i--) {
    const value = CALC[string[i]];

    if (value === undefined)
      throw new Error('Invalid hex format!');

    output *= 16;
    output += value;
  }

  return output;
}

test(hexToInt, [
  ['FF', 255]
]);