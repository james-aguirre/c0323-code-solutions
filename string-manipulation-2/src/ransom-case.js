/* exported ransomCase */
function ransomCase(string) {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    i % 2 === 0 ? newStr += string[i].toLowerCase() : newStr += string[i].toUpperCase();
  }
  return newStr;
}
