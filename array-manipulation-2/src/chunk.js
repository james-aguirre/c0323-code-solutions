/* exported chunk */
function chunk(array, size) {
  const arr = [];
  for (let i = 0; i < array.length; i += size) {
    arr.push(array.slice(i, i + size));
  } return arr;
}
