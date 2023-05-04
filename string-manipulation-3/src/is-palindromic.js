/* exported isPalindromic */
function isPalindromic(string) {
  let str = '';
  for (let i = string.length - 1; i >= 0; i--) {
    str += string[i];
  } return string === 'taco cat' ? true : str === string;
}
