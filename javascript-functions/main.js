function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('result of convertMinutesToSeconds(5):', convertMinutesToSeconds(5));
function greet(name) {
  return 'Hey, ' + name;
}
console.log('result of greet(World): ', greet('World'));
function getArea(width, height) {
  return width * height;
}
console.log('result of getArea(5, 20):', getArea(5, 20));
const person = { firstName: 'Lelouche', lastName: 'Lamperouge' };
function getFirstName(person) {
  return person.firstName;
}
console.log('result of getFirstName(person):', getFirstName(person));
const array = ['propane', 'and', 'propane', 'accessories'];
function getLastElement(array) {
  const lastElement = array.length - 1;
  return array[lastElement];
}
console.log('result of getLastElement(array):', getLastElement(array));
