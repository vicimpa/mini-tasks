const { test } = require("./lib/test");

function findCouple(array = [0], num = 0) {
  const map = new Map();
  const output = [];

  for (let i = 0; i < array.length; i++) {
    const now = array[i];

    if (map.has(now)) {
      output.push([map.get(now), now]);
    } else {
      map.set(num - now, now);
    }
  }

  return output;
}

test(findCouple, [
  [[0, 1, 2, 3], 3, [[1, 2], [0, 3]]],
  [[0, 1, 2, 3, -1], 2, [[0, 2], [3, -1]]]
]);