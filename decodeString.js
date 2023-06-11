const { test } = require("./lib/test");

class Group {
  num = 0;
  str = '';
  /** @type {Group | null} */
  parent = null;

  /**
   * 
   * @param {number} num 
   * @param {Group | null} parent 
   */
  constructor(num, parent) {
    this.num = num;
    this.parent = parent;
  }
}

const START_NUM = '0'.charCodeAt(0);
const END_NUM = '9'.charCodeAt(0);

const isNum = (s = '') => {
  const code = s.charCodeAt(0);
  if (code >= START_NUM && code <= END_NUM)
    return true;

  return false;
};

const decodeString = (str = '') => {
  let output = '';
  let num = 0;
  /** @type {Group | null}  */
  let group = null;

  /**
   * @param {number | string} str 
   */
  const append = (str) => {
    if (num) {
      str = '' + num + str;
      num = 0;
    }

    if (group)
      group.str += str;
    else
      output += str;
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (isNum(char)) {
      num *= 10;
      num += +char;
      continue;
    }

    if (char === '[') {
      group = new Group(num, group);
      num = 0;
      continue;
    }

    if (char === ']') {
      if (!group)
        throw new Error('Syntax error');

      append('');
      const current = group;
      group = group.parent;
      append(current.str.repeat(current.num));
      continue;
    }


    append(char);
  }

  if (group)
    throw new Error('Syntax error');

  return output;
};

test(decodeString, [
  ['2[a2[a1]]', 'aa1a1aa1a1']
]);