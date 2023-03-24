/* exported truncate */
function truncate(length, string) {
  let results = '';
  for (let i = 0; i < length; i++) {
    if (string[i]) {
      results += string[i];
    }
  } results += '...';
  return results;
}
