/* exported pick */
function pick(source, keys) {
  const newObj = {};
  for (const key in source) {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === key && source[key] !== undefined) {
        newObj[keys[i]] = source[key];
        newObj[key] = source[key];
      }
    }
  } return newObj;
}
