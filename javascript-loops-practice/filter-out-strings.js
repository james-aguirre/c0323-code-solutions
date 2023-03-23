/* exported filterOutStrings */
function filterOutStrings(values) {
  const numbers = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      numbers.push(values[i]);
    }
  } return numbers;
}
// use typeof operator to filter numbers from strings//
