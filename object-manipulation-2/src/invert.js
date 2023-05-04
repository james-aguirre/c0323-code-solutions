/* exported invert */
function invert(source) {
  const newObj = {};
  for (const key in source) {
    const value = source[key];
    newObj[value] = key;
  } console.log(newObj);
  return newObj;
}
