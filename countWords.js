// Функция, которая проверяет, является ли символ буквой
function isLetter(char) {
  // Если код символа находится в диапазоне кодов латинских букв в верхнем регистре или в нижнем регистре, то это буква
  return (char >= 'A' && char <= 'Z') || (char >= 'a' && char < 'z');
}

// Функция, которая подсчитывает количество слов в строке
function countWords(str) {
  // Если строка пустая, вернуть пустой Map
  if (!str) {
    return new Map();
  }

  let map = new Map();
  let currentWord = '';

  // Функция, которая добавляет слово в Map и сбрасывает текущее слово
  function addWord() {
    if (currentWord) {
      let count = map.get(currentWord) || 0;
      map.set(currentWord, count + 1);
      currentWord = '';
    }
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // Если символ является буквой, добавить его к текущему слову
    if (isLetter(char)) {
      currentWord += char;
    } else {
      // Иначе добавить текущее слово в Map и сбросить его
      addWord();
    }
  }

  // Добавить последнее слово в Map
  addWord();

  return map;
}
