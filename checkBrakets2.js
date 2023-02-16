const { test } = require("./lib/test");

const checkBrakets = (brackets = '') => {
  const stack = [];

  const pairs = {
    '{': '}',
    '(': ')',
    '[': ']',
    '<': '>',
  };

  for (let i = 0; i < brackets.length; i++) {
    let char = brackets.charAt(i);

    if (pairs[char]) {
      stack.push(char);
    } else {
      let last = stack.pop();
      if (pairs[last] != char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

test(checkBrakets, [
  ["( {)  } ", false],
  ["()[]{}<>", true],
  ["<(){[]}>", true],
  ["())", false],
  ["()(", false],
  ["{)][(}", false]
]);