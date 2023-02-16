const { test } = require("./lib/test");

function digitalRoot(n = 0) {
  while (n > 9) {
    let now = 0;

    while (n) {
      now += n % 10;
      n = (n / 10) | 0;
    }

    n = now;
  }

  return n;
}

test(digitalRoot, [
  [942, 6]
]);