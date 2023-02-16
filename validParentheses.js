const BRAKETS = '[](){}<>';

function validParentheses(parens = '') {
  /** @type {string[]} */
  const opens = [];

  for (const char of parens) {
    const index = BRAKETS.indexOf(char);

    if (index === -1)
      continue;

    const need = BRAKETS[index - 1];
    const last = opens[opens.length - 1];

    if ((index & 1) === 0)
      opens.push(char);
    else if (last !== need)
      return false;
    else
      opens.pop();
  }

  return !opens.length;
}

console.log(validParentheses('()')); // true;
console.log(validParentheses('()[]')); // true;
console.log(validParentheses('[()[]]')); // true;
console.log(validParentheses('][()[]]')); // false;
console.log(validParentheses('[(])[]')); // false;
console.log(validParentheses(']')); // false;
console.log(validParentheses('<')); // false;
console.log(validParentheses('(]')); // false;