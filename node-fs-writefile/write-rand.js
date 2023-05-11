import { writeFile } from 'node:fs/promises';

function randomNum(max) {
  const num = Math.floor(Math.random() * max);
  console.log(num);
  return num;
}
async function random() {
  try {
    const promise = await writeFile('random.txt', `${randomNum(5)}`);
    return promise;
  } catch (err) {
    console.error(err.message);
  }
}

random();
