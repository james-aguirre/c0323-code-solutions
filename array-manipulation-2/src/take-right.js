/* exported takeRight */
function takeRight(array, count) {
  const arr = [];
  if (array.length > count) {
    for (let i = array.length - count; i < array.length; i++) {
      arr.push(array[i]);
    } return arr;
  } else {
    return array;
  }
}
