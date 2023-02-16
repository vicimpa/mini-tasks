const { test } = require("./lib/test");

/**
 * @param  {number[]} args 
 * @returns 
 */
function argsCount(...args) {
  return args.length;
}

test(argsCount, [
  [1, 2, 3, 3],
  [1, 2, 3, 4, 5, 5]
]);