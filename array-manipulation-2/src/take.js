/* exported take */

function take(array, count) {
  const arr = [];
  let i = 0;
  while (i < count) {
    if (count) {
      arr.push(array[i]);
      i++;
    } else {
      return;
    }
  } return arr;
}
