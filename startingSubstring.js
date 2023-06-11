const REGEXP = /((\#[^#]+)[^#]+)(%2+[^#]+)$/;

function startingSubstring(array = ['']) {
  const str = '#' + array.join('#') + '$';
  return str.replace(/^(#([^#]+)[^#]*)(#\2[^#]*)*$/, '$2');
}

console.log(startingSubstring(['аб', 'абв', 'абвг'])); // аб