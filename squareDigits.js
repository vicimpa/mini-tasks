
function reverse(num = 0) {
  let output = 0;

  while (num) {
    const n = num % 10;
    num = num / 10 | 0;
    output *= 10;
    output += n;
  }

  return output;
}

function squareDigits(num = 0) {
  let output = 0;

  num = reverse(num);

  while (num) {
    const n = num % 10;
    const r = n * n;
    num = num / 10 | 0;

    output *= r > 9 ? 100 : 10;
    output += r;
  }

  return output;
}

console.log(squareDigits(9119)); // 811181
console.log(squareDigits(123)); // 149