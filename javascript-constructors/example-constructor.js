function ExampleConstructor() {

}
console.log('ExampleConstructor.prototype.value : ', ExampleConstructor.prototype.value);
console.log('typeof Example.Constructor.prototype: ', typeof ExampleConstructor.prototype);

const newExConstructor = new ExampleConstructor();
console.log('newExConstructor: ', newExConstructor);
const instanceOf = newExConstructor instanceof ExampleConstructor;
console.log('instanceOf: ', instanceOf);
