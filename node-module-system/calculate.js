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
