function validParentheses(parens = '') {
  let opens = 0;

  for (const char of parens) {
    if (char == '(') opens++;
    if (char == ')') opens--;
    if (opens < 0) return false;
  }

  return opens == 0;
}

// console.log(validParentheses('()')); // true;
// console.log(validParentheses('()[]')); // true;
// console.log(validParentheses('[()[]]')); // true;
// console.log(validParentheses('][()[]]')); // false;
// console.log(validParentheses('[(])[]')); // false;
// console.log(validParentheses(']')); // false;
// console.log(validParentheses('<')); // false;
// console.log(validParentheses('(]')); // false;


