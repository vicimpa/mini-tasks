const { test } = require("./lib/test");

/**
 * @param {boolean[]} array 
 */
function trueCount(array) {
  return array.reduce((acc, e) => e ? acc + 1 : acc, 0);
}

test(trueCount, [
  [
    [
      true, true, true, false,
      true, true, true, true,
      true, false, true, false,
      true, false, false, true,
      true, true, true, true,
      false, false, true, true
    ],
    17
  ]
]);