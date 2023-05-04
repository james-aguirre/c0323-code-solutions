/* exported capitalizeWord */
function capitalizeWord(word) {
  const lower = word.toLowerCase();
  return word.toLowerCase() === 'javascript' ? 'JavaScript' : word.charAt(0).toUpperCase() + lower.slice(1);
}
