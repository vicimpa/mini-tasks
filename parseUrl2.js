const { test } = require("./lib/test");

const parseUrl = (url = '') => {
  const queryString = url.split('?')[1];
  const parameters = queryString.split('&');
  let result = {};
  for (let parameter of parameters) {
    const [key, value] = parameter.split('=');
    result[key] = parseInt(value);
  }
  return result;
};

test(parseUrl, [
  ['?a=1&b=2', { a: '1', b: '2' }],
  ['?a=1&b=2&c=3&d=4', { a: '1', b: '2', c: '3', d: '4' }],
  ['', {}]
]);