import takeAChance from './take-a-chance.js';

const a = takeAChance('James');
a.then((val) => console.log(val));
a.catch((error) => console.log(error.message));
