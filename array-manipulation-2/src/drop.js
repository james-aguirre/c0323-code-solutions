/* exported drop */
function drop(array, count) {
  const arr = [];
  for (let i = 0 - count; i < array.length; i++) {
    if (i) {
      arr.push(array[i]);
    }
  } return arr;
}
