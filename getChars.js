const { test } = require("./lib/test");

function getChars(str = '') {
  return [...str].map((char, i) => (
    (str[i - 1] ?? '') +
    char +
    (str[i + 1] ?? '')
  ));
}

test(getChars, [
  ['JavaScript', [
    'Ja', 'Jav', 'ava',
    'vaS', 'aSc', 'Scr',
    'cri', 'rip', 'ipt',
    'pt'
  ]]
]);
