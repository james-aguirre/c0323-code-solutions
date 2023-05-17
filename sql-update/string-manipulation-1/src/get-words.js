/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  } else if (string !== null) {
    return string.split(' ');
  }
}
