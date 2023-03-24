/* exported drop */
function drop(array, count) {
  const drop = [];
  for (let i = count; i < array.length; i++) {
    drop.push(array[i]);
  } return drop;
}
