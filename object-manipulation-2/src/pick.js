/* exported pick */
function pick(source, keys) {
  const obj = {};
  for (const key in source) {
    obj[keys] = source[key];
  }
}
