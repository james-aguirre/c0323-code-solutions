/* exported invert */
function invert(source) {
  const newObj = {};
  for (const key in source) {
    const value = source[key];
    newObj[value] = key;
  }
  return newObj;
}
