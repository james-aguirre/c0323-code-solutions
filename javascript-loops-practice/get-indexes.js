/* exported getIndexes */
function getIndexes(array) {
  const indexes = [];
  let i = 1;
  for (i in array) {
    indexes.push(i);
    indexes[i] = i * 1;
  }
  return indexes;
}
