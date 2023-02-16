function reverceNum(n = 0) {
  let output = 0;

  if (n < 0)
    n *= -1;

  while (n > 0) {
    output *= 10;
    output += n % 10;
    n = n / 10 | 0;
  }

  return output;
}


console.log(reverceNum(123));
console.log(reverceNum(21));