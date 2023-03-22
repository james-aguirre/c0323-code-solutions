const number1 = 1;
const number2 = 60;
const number3 = 200;
const maximumValue = Math.max(number1, number2, number3);
console.log('maximumValue: ', maximumValue);

const heroes = ['the hulk', 'batman', 'superman', 'spiderman'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

const library = [
  {
    title: 'JAVASCRIPT & JQUERY',
    author: 'Jon Ducket'
  },
  {
    title: 'The Art of War',
    author: 'Sun TZU'
  },
  {
    title: 'The Kybalion',
    author: 'The Three Initiates'
  }
];

const lastBook = library.pop();
console.log('lastBook: ', lastBook);
const firstBook = library.shift();
console.log('firstBook: ', firstBook);

const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library value: ', library);

const fullName = 'James Aguirre';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName value: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyNameValue: ', sayMyName);
