/** @type {any[]} */
const OBJECTS_CACHE = [];

/**
 * @param {any} object 
 * @returns 
 */
function objectHash(object) {
  let index = OBJECTS_CACHE.indexOf(object);

  if (index === -1) {
    index = OBJECTS_CACHE.length;
    OBJECTS_CACHE.push(object);
  }

  return index;
}

/**
 * @param {any[]} args 
 * @returns 
 */
function argumentsHash(...args) {
  return args
    .map(item => {
      if (
        item && (
          typeof item === 'object' ||
          typeof item === 'function' ||
          typeof item === 'symbol'
        )
      ) return `O:${objectHash(item)}`;
      else return `P:${JSON.stringify(item)}`;
    }).join('||');
}

/**
 * @param {(...args: any[]) => any} func 
 * @returns 
 */
function makeCaching(func = () => { }) {
  if (!(func instanceof Function))
    throw new Error('Func is not a function!');

  const argsCahce = new Map();

  /**
   * @param {any[]} args
   */
  return (...args) => {
    const hash = argumentsHash(...args);

    if (argsCahce.has(hash))
      return argsCahce.get(hash);

    return argsCahce
      .set(hash, func(...args))
      .get(hash);
  };
}

const caching = makeCaching((x) => Math.random() * x);

console.log(caching(2), caching(2));