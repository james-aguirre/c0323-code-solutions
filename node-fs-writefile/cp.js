import { readFile, writeFile } from 'node:fs/promises';
async function copy() {
  try {
    const name = process.argv.slice(2);
    const newFile = name.slice(1);
    const fileTxt = await readFile(`${name}`, 'utf8');
    const promise = await writeFile(`${newFile}`, `${fileTxt}`);
    return promise;
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}

copy();
