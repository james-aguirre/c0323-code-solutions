import takeAChance from './take-a-chance.js';

const a = takeAChance('James')
  .then((val) => console.log(val))
  .catch((error) => console.log(error.message));
