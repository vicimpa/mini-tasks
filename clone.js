function clone(obj, r = true) {
  if (obj && typeof obj === 'object') {
    if (Array.isArray(obj)) {
      return obj.map(
        item => r ? clone(item) : item
      );
    } else {
      return Object.entries(obj).reduce(
        (acc, [key, value]) => {
          acc[key] = r ? clone(value) : value;
          return acc;
        }
      );
    }
  }

  if (typeof obj === 'function') {
    return eval(obj.toString());
  }
}