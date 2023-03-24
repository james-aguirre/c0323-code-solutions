/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const swapped = [];
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === firstIndex) {
      swapped.push(secondIndex);
    } else if (string[i] === secondIndex) {
      swapped.push(firstIndex);
    } else swapped.push(string[i]);
  }
  for (let i = 0; i < secondIndex.length; i++) {
    newStr += swapped[i];
  }
  return newStr;
}
console.log(swapChars(0, 1, 'lodash'));
