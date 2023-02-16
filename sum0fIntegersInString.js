const sum0fIntegersInString = (s = '') => {
  let summ = 0;
  return (s.replace(/\d+/gm, (v) => (summ += +v, ' ')), summ);
};

console.log(sum0fIntegersInString('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy'));