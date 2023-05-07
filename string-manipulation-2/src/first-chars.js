/* exported firstChars */
function firstChars(length, string) {
  let arr = '';
  for (let i = 0; i < length; i++) {
    if (string[i]) {
      arr += string[i];
    }
  } return arr;
}
