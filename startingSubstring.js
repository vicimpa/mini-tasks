function startingSubstring(array = ['']) {
  let i = 0;

  while (true) {
    for (let j = 1; j < array.length; j++) {
      if (array[j][i] !== array[0][i])
        return array[0].slice(0, i);
    }

    i++;
  }
}

console.log(startingSubstring(['аб', 'абв', 'абвг']));