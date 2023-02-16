function squareDigits(num = 0) {
  let output = '';

  while (num) {
    let r = (num % 10) ** 2;
    num = num / 10 | 0;

    output = r + output;
  }

  return output;
}

console.log(squareDigits(9119)); // 811181