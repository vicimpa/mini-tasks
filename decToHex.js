const { test } = require("./lib/test");

const HEX_ABC = "0123456789ABCDEF";

function decToHex(num = 0) {
  let sign = '', output = '';

  if (num < 0) {
    sign = '-';
    num = -num;
  }

  while (num) {
    output = HEX_ABC[num % 16 | 0] + output;
    num = num / 16 | 0;
  }

  return sign + output;
}

test(decToHex, [
  [255, 'FF']
]);