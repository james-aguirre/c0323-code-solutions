/* exported includes */
function includes(array, value) {
  const values = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== value) {
      values.push(false);
    } else if (array[i] === value) {
      values.push(true);
    }
  } if (values === true) {
    return true;
  } else if (values !== true) {
    return false;
  }
}
