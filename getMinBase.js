function getMinBase(num = 0) {
  for (let i = 2; i < 37; i++) {
    const sNum = num.toString(i);
    if (sNum === '1'.repeat(sNum.length))
      return i;
  }

  return NaN;
}

console.log(getMinBase(1));