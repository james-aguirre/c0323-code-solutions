/* exported findIndex */
function findIndex(array, value) {
  const index = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index.push(i);
      break;
    }
  } const indexNumber = index * 1;
  if (indexNumber === 0) {
    return -1;
  } else {
    return indexNumber;
  }
}
