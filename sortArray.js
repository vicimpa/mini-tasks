/**
 * @param {number[]} array 
 * @param {(a: number, b: number) => number} condition 
 * @returns {number[]}
 */
function sortArray(array, condition = (a, b) => a - b) {
  console.log(array);
  if (array.length < 2) {
    return array;
  }

  if (array.length > 2) {
    array = [...array];
    return [
      ...sortArray(array.splice(0, array.length / 2 | 0), condition),
      ...sortArray(array, condition)
    ];
  }

  const [a, b] = array;
  const result = condition(a, b);

  if (result >= 0)
    return [a, b];

  return [b, a];
}

console.log(sortArray([1, 4, 3, 2]));