const { test } = require("./lib/test");

function stringExpansion(str = '') {
  let count = 1;
  return str.replace(/(\d|\D)/g, (_, s = '') => (
    isNaN(s) ? s.repeat(count) : (count = +s, '')
  ));
}

test(stringExpansion, [
  ["3D2a5d2f", "DDDaadddddff"],
  ["3abc", "aaabbbccc"],
  ["3d332f2a", "dddffaa"],
  ["abcde", "abcde"],
  ["1111", ""],
  ["", ""],
]);