import { writeFile } from 'node:fs/promises';

async function note(input) {
  try {
    const input = process.argv.slice(2);
    const promise = await writeFile('note.txt', `${input}\n`);
    return promise;
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}

note();
