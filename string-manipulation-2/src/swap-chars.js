/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let str = '';
  for (let i = 0; i < string.length; i++) {
    i === firstIndex
      ? str += string[secondIndex]
      : i === secondIndex
        ? str += string[firstIndex]
        : str += string[i];
  } return str;
}
