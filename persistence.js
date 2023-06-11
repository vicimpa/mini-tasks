const { test } = require("./lib/test");

const persistence = (n = 0) => {
  let i = 0;
  while (n > 9) {
    let now = 1;

    if (n > 0)
      i++;

    while (n > 0) {
      now *= n % 10;
      n = n / 10 | 0;
    }

    n = now;
  }

  return i;
};

test(persistence, [
  [39, 3],
  [999, 4],
  [4, 0]
]);