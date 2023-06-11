Поправил еще немного свой код и получил ошеломительную разницу

Setup block
```js
  const array = Array.from(
    {length: 100}, 
    () => Math.random() * 100000000000000 | 0 
  );
```

Boilerplate block
```js
for(let i = 0; i < array.length; i++) {
	squareDigits(array[i]);
}
```

YouCode Block
```js
function squareDigits(num = 0) {
  const digits = num.toString().split('');
  const output = digits.map(d => d ** 2).join('');
  return Number(output);
}
```

MyCode Block
```js
function squareDigits(num = 0) {
  let output = 0;

  while (num) {
    const r = (num % 10) ** 2;
    num = num / 10 | 0;

    output *= r > 9 ? 100 : 10;
    output += r;
  }

  return output;
}
```

Результаты тестирования таковы:
- MyCode Block (118973) 100% 🏆
- YouCode Block (49918) 41.96%