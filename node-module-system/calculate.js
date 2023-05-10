import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

if (process.argv[3] === 'plus') {
  add(process.argv[2], process.argv[4]);
} else if (process.argv[3] === 'minus') {
  subtract(process.argv[2], process.argv[4]);
} else if (process.argv[3] === 'over') {
  divide(process.argv[2], process.argv[4]);
} else if (process.argv[3] === 'times') {
  multiply(process.argv[2], process.argv[4]);
}

// if (process.arg)
// function calculate() {
//   console.log('Result:', calc(process.argv[3]) )
// }

// const obj = {
//   plus: add(),
//   minus: subtract(),
//   over: divide(),
//   times: multiply()
// }

// if (argv[3] )
// function calc(argv) {
// for (const key in obj) {
//   if (argv[3] === key) {
//     return obj[key]
//   }
// }

// }

// function calculate(arg1, operator, arg2) {
//   switch(operator) {
//     case 'plus': return add(arg1, arg2);
//   }
// }

// const arg1 = Number(process.argv[2]);
// const operator = process.argv[3];
// const arg2 = Number(process.argv[4]);
