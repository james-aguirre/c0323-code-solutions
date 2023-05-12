import { readFile, writeFile } from 'node:fs/promises';
// async function copy() {
//   try {
//     const name = process.argv[2];
//     const newFile = process.argv[3];
//     const fileTxt = await readFile(`${name}`, 'utf8');
//     const promise = await writeFile(`${newFile}`, `${fileTxt}`);
//     return promise;
//   } catch (err) {
//     console.log(err.message);
//     process.exit(1);
//   }
// }

// copy();

// This is the better way to do it, cleaner code and easier to read
const [, , source, destination] = process.argv;

try {
  const data = await readFile(source);
  await writeFile(destination, data);
} catch (err) {
  console.error('Error copying file:', err);
  process.exit(1);
}
