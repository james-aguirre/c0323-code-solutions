import { readFile } from 'node:fs/promises';

try {
  const file = await readFile('data.json');
  const parse = JSON.parse(file);
  console.log(parse);
} catch (error) {
  console.log('thrown Error', error.message);
}
