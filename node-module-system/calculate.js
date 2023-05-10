import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

if (process.argv[3] === 'plus') {
  console.log(add(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'minus') {
  console.log(subtract(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'over') {
  console.log(Number(divide(Number(process.argv[2]), Number(process.argv[4]))));
} else if (process.argv[3] === 'times') {
  console.log(multiply(Number(process.argv[2]), Number(process.argv[4])));
}

//  function calc(argv)  {
//   for (const key in obj)
//    if (argv[3] === key) {
//      return obj[key]
//    }
//  }
//  const obj = {
//    plus: add,
//    minus: subtract,
//    over: divide,
//    times: multiply,
//  };

//  if (process.argv) {
//    console.log(calc(obj));
//  }
