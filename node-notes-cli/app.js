import { readFile, writeFile } from 'node:fs/promises';

async function parse() {
  const file = await readFile('data.json');
  const parse = JSON.parse(file);
  return parse;
}
const data = await parse();
async function notes() {
  console.log(data);
  // let list;
  // for (const key in data) {
  //   if (key === 'notes')
  //   list = data[key]
  // }
  // list.forEach((element) => console.log(element))
}

async function create(newNotes) {
  const key = data.nextId;
  data.notes[key] = newNotes;
  data.nextId++;
  const newObj = JSON.stringify(data, null, 2);
  await writeFile('data.json', newObj);
}

// async function remove(index) {
//   const data = await parse()
// }

if (process.argv[2] === 'read') {
  notes();
} else if (process.argv[2] === 'create') {
  create(process.argv[3]);
}
