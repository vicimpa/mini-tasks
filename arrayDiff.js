const { test } = require("./lib/test");

/**
 * @param {number[]} array 
 * @param {number[]} exclude
 */
const arrayDiff = (array, exclude) => {
  const setExclude = new Set(exclude);
  return array.filter(e => !setExclude.has(e));
};

test(arrayDiff, [
  [[1, 2], [1], [2]],
  [[1, 2, 2, 2, 3], [2], [1, 3]]
]);