/**
 * @type {{[key: string]: string}}
 */
const CONV_CHAR = {
  [`<`]: '&lt',
  [`>`]: '&gt',
  [`'`]: '&#039',
  [`"`]: '&quot',
  [`&`]: '&amp'
};

function convChar(str = '') {
  let output = '';

  for (let i = 0; i < str.length; i++)
    output += CONV_CHAR[str[i]] ?? str[i];

  return output;
}

console.log(convChar(`<p style="color: 'red'"></p>`));