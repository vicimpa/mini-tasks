function isPythagoreanTriple(integers = [0]) {
  let [
    a = undefined,
    b = undefined,
    c = undefined
  ] = integers;

  if (
    false
    || a === undefined
    || b === undefined
    || c === undefined
  ) return false;

  a *= a;
  b *= b;
  c *= c;

  return (
    false
    || a + b === c
    || a + c === b
    || b + c === a
  );
}


console.log(isPythagoreanTriple([5, 4, 3]));