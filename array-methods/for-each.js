const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order: ');
values.forEach((element) => console.log(element));

console.log('Reverse: ');
values.reverse().forEach((element) => console.log(element));

values.forEach((n, index) => console.log(values[values.length - 1 - index]));
