/* exported ransomCase */
function ransomCase(string) {
  const words = string.toLowerCase();
  for (let i = -1; i < words.length; i += 2) {
    words[i] = words[i].toUpperCase() + words[i].slice(1);
  } return words;
}
