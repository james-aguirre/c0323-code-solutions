/* exported drop */
function drop(array, count) {
  const arr = [];
  for (let i = count; i < array.length; i++) {
    arr.push(array[i]);
  } return arr;
}
