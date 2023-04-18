function ExampleConstructor() {

}
console.log('ExampleConstructor.prototype : ', ExampleConstructor.prototype);
console.log('typeof Example.Constructor.prototype: ', typeof ExampleConstructor.prototype);

const newExConstructor = new ExampleConstructor();
console.log('newExConstructor: ', newExConstructor);
const instanceOf = newExConstructor instanceof ExampleConstructor;
console.log('instanceOf: ', instanceOf);
