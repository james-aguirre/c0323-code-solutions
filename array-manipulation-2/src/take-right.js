/* exported takeRight */
function takeRight(array, count) {
  const taken = [];
  for (let i = 0; i < array.length - count; i++) {
    taken.pop(array[i]);
  } return taken;
}
