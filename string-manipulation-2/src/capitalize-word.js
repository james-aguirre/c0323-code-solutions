/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.charAt(4).toUpperCase() + lower.slice(1);
  } else {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }
}
