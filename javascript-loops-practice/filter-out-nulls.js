/* exported filterOutNulls */
function filterOutNulls(values) {
  const numbers = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      numbers.push(values[i]);
    }
  } return numbers;
}
