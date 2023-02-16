/**
 * @param {any} a 
 * @param {any} b 
 */
function isEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

/**
 * @param {Function} func 
 * @param {any[][]} assets 
 */
exports.test = function test(func, assets) {
  console.log(`Testing function ${func.name}\n`);
  const output = [];
  let time = 0;

  for (const asset of assets) {
    const need = asset.pop();
    let out = '';
    try {
      out += ` -> ${func.name}(${asset.map(e => JSON.stringify(e)).join(', ')})`;
      const nowTime = performance.now();
      const result = func(...asset);
      time += performance.now() - nowTime;
      const isTrue = isEqual(result, need);
      out += `\n | ${isTrue ? 'Ok' : 'Fail'}`;
      out += `\n | Result: ${JSON.stringify(result)}`;

      if (!isTrue)
        out += (`\n | Need: ${JSON.stringify(need)}`);
    } catch (e) {
      out += '\n | Fail';
      out += '\n | ' + String(e);
    }
    output.push(out);
  }

  console.log(output.join(`\n\n`) + `\n\n | Time: ${time}ms`);
};