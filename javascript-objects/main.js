const student = {
  firstName: 'James',
  lastName: 'Aguirre',
  age: 24
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'carpenter';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);
const vehicle = {
  make: 'Ford',
  model: 'Ranger',
  year: '2005'
};
vehicle['color'] = 'grey';
vehicle['isConvertible'] = false;
console.log('value of vehicle ["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle object: ', vehicle);
const pet = {
  name: 'paco',
  type: 'chihuahua'
};
delete pet.name;
delete pet.type;
console.log('value of pet object: ', pet);
