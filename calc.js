const { sin, cos, tan, atan } = Math;

const regExp = /(\w+)\s+((\d+)[\.\,]?(\d+)?)/g;
const input = `
  let x = 10
  let y = 20
  sin x * 10
`.replace(regExp, '$1($3.$4)');

console.log(input);


new Worker('data:,console.log(\'Hello world!\')');