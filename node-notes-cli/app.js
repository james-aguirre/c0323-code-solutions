import { readFile, writeFile } from 'node:fs/promises';

async function parse() {
  const file = await readFile('data.json');
  const parse = JSON.parse(file);
  return parse;
}
const data = await parse();
async function notes() {
  const list = data.notes;
  console.log(list);
  return list;
}
// list.forEach((element) => console.log(element))

async function create(newNotes) {
  const key = data.nextId;
  data.notes[key] = newNotes;
  data.nextId++;
  const newObj = JSON.stringify(data, null, 2);
  await writeFile('data.json', newObj);
}

async function remove(index) {
  const list = await notes();
  console.log(list[index]);
  delete list[index];
}

if (process.argv[2] === 'read') {
  notes();
} else if (process.argv[2] === 'create') {
  create(process.argv[3]);
} else if (process.argv[2] === 'delete') {
  remove(process.argv[3]);
}
