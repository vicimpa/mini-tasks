const REPLACE = (find = '', index = 0, str = '') => {
  return (false
    || index === 0 // Если подстрока в начале
    || find.length + index === str.length // Или подстрока в конце
  ) ? '' /* вернём пустую строку */ : ' ' /* иначе вернём пробел */;
};

function strip(str = '') {
  /* Заменим все найденные пробелы по функции */
  return str.replace(/\s+/g, REPLACE);
}

console.log(JSON.stringify(strip('   Привет    мир!     ')));