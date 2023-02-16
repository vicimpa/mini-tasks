const array = [10, 1, 6, 7, 9, 8, 4, 3, 5, 2];

const { min, max } = Math;

/**
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function gcd(a, b) {
  if (b == 0)
    return a;
  return gcd(b, a % b);
}

let count = 0;

console.time();
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    for (let k = j + 1; k < array.length; k++) {
      const I = array[i], J = array[j], K = array[k];
      const a = min(I, J, K);
      const b = max(I, J, K);
      if (a === b) continue;
      if (gcd(a, b) === 1) count++;
    }
  }
}
console.timeEnd();

console.log(count);