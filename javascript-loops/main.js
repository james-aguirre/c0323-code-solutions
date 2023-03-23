/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getNumbersToTen', getNumbersToTen());

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  } return evenNumbers;
}
console.log('getEvenNumbersToTwenty():', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log('repeatedWord(\'foo\', 20):', repeatWord('foo', 20));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
console.log('logEachCharacter: ^', logEachCharacter('a big string'));

function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  } return doubled;
}
console.log('doubleAll[6, 20, 50]:', doubleAll([6, 20, 50]));

function getKeys(object) {
  const keys = [];
  let key = 1;
  for (key in object) {
    keys.push(key);
  } return keys;
}
console.log('keys in getkeys:', getKeys({
  james: 'friend',
  howdy: 'partner',
  woo: 'woooooo'
}));

function getValues(object) {
  const values = [];
  let key = 2;
  for (key in object) {
    values.push(object[key]);
  } return values;
}
console.log('getValues:', getValues({
  key: 'value1',
  key2: 'value2',
  last: 'thirdval'
}));
