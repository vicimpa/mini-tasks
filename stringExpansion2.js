const { test } = require("./lib/test");

function stringExpansion(str = '') {
  const matches = str.match(/\d\D+/g);

  if (matches instanceof Array) {
    return matches
      .map(m => m.substring(1).repeat(+m[0]))
      .join('');
  }

  return '';
}

test(stringExpansion, [
  ["3D2a5d2f", "DDDaadddddff"],
  ["3abc", "aaabbbccc"],
  ["3d332f2a", "dddffaa"],
  ["abcde", "abcde"],
  ["1111", ""],
  ["", ""],
]);