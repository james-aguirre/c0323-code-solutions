/* exported titleCase */
function titleCase(string) {
  const str = string.toLowerCase().split(' ');
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    str[i].split('');
    str[i].toLowerCase();
    if (str[i].length >= 4) {
      newStr += str[i][0].toUppercase;
    }
    console.log(str[i].length);
  }
  return newStr;
}
