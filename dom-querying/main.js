console.log('hello, world');

const el = document.querySelector('h1');
console.log('$heading', el);
console.dir(el);

const explanation = document.querySelector('#explanation');
console.log('p#explanation', explanation);
console.dir(explanation);

const hint = document.querySelector('.hint');
console.log('$hint', hint);
console.dir(hint);

const allP = document.querySelectorAll('p');
console.log('$paragraphs', allP);

const exampleLink = document.querySelectorAll('.example-link');
console.log('$links', exampleLink);
