import { readFile } from 'node:fs/promises';

async function read() {
  try {
    const arr1 = process.argv.slice(2);
    const arr2 = arr1.map(async (element) => {
      const that = await readFile(element, { encoding: 'utf8' });
      return that;
    });
    const promises = await Promise.all(arr2);
    promises.forEach((element) => console.log(element));
  } catch (err) {
    console.error(err.message);
  }
}
read();
