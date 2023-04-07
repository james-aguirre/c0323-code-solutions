const array = [
  {
    isbn: 2234 - 123,
    title: 'The Kybalion',
    author: 'The Three Initiates'
  },
  {
    isbn: '2235-123',
    title: 'Outliers',
    author: 'Malcolm Gladwell'
  },
  {
    isbn: '2236-123',
    title: 'HTML And CSS',
    author: 'Jon Ducket'
  }
];

const jsonExample = JSON.stringify(array);
console.log('jsonExample: ', jsonExample);
console.log('typof :', typeof jsonExample);

const jSon = '{"numberId": 32425,"name":"James Aguirre"}';
console.log('student: ', jSon);
console.log('typeof: ', typeof jSon);
const obj = JSON.parse(jSon);
console.log('student jSon:', obj);
console.log('typeof: ', typeof obj);
