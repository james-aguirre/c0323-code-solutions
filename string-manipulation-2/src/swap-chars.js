/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  string.charAt[firstIndex] = string.charAt[secondIndex];
}
console.log(swapChars(0, 1, 'lodash'));
