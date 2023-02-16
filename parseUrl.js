const { test } = require("./lib/test");

function parseUrl(url = '') {
  return (url.split('?')[1] ?? '').split('&').reduce((acc, _, i, d, [key, val] = _.split('=')) => (acc[key] = val, acc), {});
}


test(parseUrl, [
  ['?a=1&b=2', { a: '1', b: '2' }],
  ['?a=1&b=2&c=3&d=4', { a: '1', b: '2', c: '3', d: '4' }],
  ['', {}]
]);