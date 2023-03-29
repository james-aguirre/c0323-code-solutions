/* exported ransomCase */
function ransomCase(string) {
  const results = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] % 2 === 0) {
      results.charAt[i].toUpperCase();
    }
  } return results;
}
