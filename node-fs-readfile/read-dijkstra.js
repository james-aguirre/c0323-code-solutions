import { readFile } from 'node:fs/promises';

async function txt() {
  try {
    const filePath = new URL('./dijkstra.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error(err.message);
  }
}

txt();
