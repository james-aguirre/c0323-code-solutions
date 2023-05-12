import { writeFile } from 'node:fs/promises';

const randomNumber = Math.random();
try {
  await writeFile('random.txt', randomNumber + '\n', 'utf8');
} catch (err) {
  console.error(err.message);
}
