/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const suffixed = [];
  for (let i = 0; i < words.length; i++) {
    if (suffix === 'ly') {
      suffixed.push(words[i] += 'ly');
    } else if (suffix === 'er') {
      suffixed.push(words[i] += 'er');
    } else if (suffix === 'ing') {
      suffixed.push(words[i] += 'ing');
    } else if (suffix === 'ity') {
      suffixed.push(words[i] += 'ity');
    }
  } return suffixed;
}
