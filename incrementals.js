const { test } = require("./lib/test");

/**
 * @param {number[]} nums 
 */
function incrementals(nums) {
  const out = nums.slice();
  for (let i = nums.length - 1; i >= 0; i--) {
    out[i] = (out[i] + i + 1) % 10;
  }
  return out;
}

test(incrementals, [
  [[1, 2, 4], [2, 4, 7]],
  [[4, 6, 9, 1, 3], [5, 8, 2, 5, 8]],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8, 0, 2, 4, 6, 8]]
]);