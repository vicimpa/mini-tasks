const CHARS_CACHE = new Map();

function char(str = '') {
  const [char] = str;

  return CHARS_CACHE.get(char) ?? (
    CHARS_CACHE.set(char, str.charCodeAt(0)),
    CHARS_CACHE.get(char)
  );
}

function isUpper(str = '') {
  const code = char(str);
  return (false
    || (code >= char('A') && code <= char('Z'))
    || (code >= char('А') && code <= char('Я'))
  );
}

function toLower(str = '') {
  const code = char(str);

  return str[0];
}

function initSnake(str = '') {
  let output = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (isUpper(char)) {
      char = char.toLowerCase();

      if (i) output += '_';
    }

    output += char;
  }

  return output;
}

console.log(initSnake('HelloWorld'));