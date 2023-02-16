const { test } = require("./lib/test");

/** @type {{[key: string]: number}} */
const BRAKETS_CHECK = {};
const BRAKETS = '(){}<>[]';

for (let i = 0; i < BRAKETS.length; i++) {
  BRAKETS_CHECK[BRAKETS[i]] = i;
}

function checkBrakets(brakets = '') {
  /** @type {string[]} */
  const open = [];

  for (let i = 0; i < brakets.length; i++) {
    const char = brakets[i];
    const index = BRAKETS_CHECK[char] ?? -1;

    if (index === -1) continue;

    if (!(index & 1)) {
      open.push(char);
      continue;
    }

    if (open[open.length - 1] !== BRAKETS[index - 1]) {
      return false;
    }

    open.pop();
  }

  return !open.length;
}

test(checkBrakets, [
  ["( {)  } ", false],
  ["()[]{}<>", true],
  ["<(){[]}>", true],
  ["())", false],
  ["()(", false],
  ["{)][(}", false]
]);