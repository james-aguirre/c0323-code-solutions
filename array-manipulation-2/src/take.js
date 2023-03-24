/* exported take */
function take(array, count) {
  const newArray = [];
  if (array !== []) {
    for (let i = 0; i <= count - 1; i++) {
      newArray.push(array[i]);
    } return newArray;
  } else if (array === []) {
    return [];
  }
}
