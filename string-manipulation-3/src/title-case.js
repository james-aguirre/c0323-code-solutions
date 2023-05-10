/* exported titleCase */
function titleCase(string) {
  const str = string.toLowerCase().split(' ');
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (str[i] === 'javascript') {
      newStr += 'JavaScript ';
    } else
    if (str[i].length >= 4) {
      newStr += str[i][0].toUpperCase() + str[i].slice(1) + ' ';
    } else if (str[i] === str[0]) {
      newStr += str[i][0].toUpperCase() + str[i].slice(1) + ' ';
    } else if (str[i] === 'api') {
      newStr += 'API';
    } else {
      newStr += str[i] + ' ';
    }
  } return newStr.trimEnd();
}
