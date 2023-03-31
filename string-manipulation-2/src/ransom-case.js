/* exported ransomCase */
function ransomCase(string) {
  let result = string.charAt(0);
  for (let i = 1; i < string.length; i++) {
    if (i % 2 === 1) {
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }
  return result;
}
