const { test } = require("./lib/test");

function reverceNum(inp = 0) {
  const inps = new Int32Array([inp]);
  let out = 0;

  while (inps[0] > 0) {
    out *= 10;
    out += inps[0] % 10;
    inps[0] /= 10;
  }

  return out;
}

test(reverceNum, [
  [123, 321],
  [405, 504],
  [45, 54]
]);