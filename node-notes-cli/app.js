import { readFile, writeFile } from 'node:fs/promises';

async function parse() {
  const file = await readFile('data.json');
  const parse = await JSON.parse(file);
  return parse;
}

const data = await parse();

async function notes() {
  const list = data.notes;
  for (const [key, value] of Object.entries(list)) {
    console.log(`${key}: ${value}`);
  }
}
async function create(newNotes) {
  const key = data.nextId;
  data.notes[key] = newNotes;
  data.nextId++;
  const newObj = JSON.stringify(data, null, 2);
  await writeFile('data.json', newObj);
}

async function remove(index) {
  delete data.notes[index];
  const newObj = JSON.stringify(data, null, 2);
  await writeFile('data.json', newObj);
}

async function edit(index) {
  const newEdit = process.argv[4];
  data.notes[index] = newEdit;
  const newObj = JSON.stringify(data, null, 2);
  await writeFile('data.json', newObj);
}

if (process.argv[2] === 'read') {
  notes();
} else if (process.argv[2] === 'create') {
  create(process.argv[3]);
} else if (process.argv[2] === 'delete') {
  remove(process.argv[3]);
} else if (process.argv[2] === 'edit') {
  edit(process.argv[3]);
}
