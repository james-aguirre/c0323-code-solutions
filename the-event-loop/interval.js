let count = 3;
const int = setInterval(() => {
  console.log(count);
  count--;
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(int);
  }
}, 1000);
