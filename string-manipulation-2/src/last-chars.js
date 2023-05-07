/* exported lastChars */
function lastChars(length, string) {
  const results = string.substring(string.length - length);
  //  const results = string.slice(string.length - length, string.length);
  return results;
}
