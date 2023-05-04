/* exported reverseWords */
function reverseWords(string) {
  const str = string.split(' ');
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += str[i].split('').reverse().join('') + ' ';
  }
  const result = newStr.substring(0, newStr.length - 1);
  return result;
}
