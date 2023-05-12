import { readFile, writeFile } from 'node:fs/promises';

async function readData() {
  const file = await readFile('data.json');
  return await JSON.parse(file);
}

const data = await readData();

async function notes() {
  const list = data.notes;
  for (const [key, value] of Object.entries(list)) {
    console.log(`${key}: ${value}`);
  }
}

async function dataToJson() {
  const newObj = JSON.stringify(data, null, 2);
  await writeFile('data.json', newObj);
}

async function create(newNotes) {
  const key = data.nextId;
  data.notes[key] = newNotes;
  data.nextId++;
  dataToJson();
}

async function remove(index) {
  if (data.notes[index]) {
    delete data.notes[index];
    dataToJson();
  } else {
    console.log('Note not found');
  }
}

async function edit(index) {
  if (data.notes !== undefined) {
    const newEdit = process.argv[4];
    data.notes[index] = newEdit;
    dataToJson();
  } else {
    console.log('Note not found');
  }
}

if (process.argv[2] === 'read') {
  notes();
} else if (process.argv[2] === 'create') {
  create(process.argv[3]);
} else if (process.argv[2] === 'delete') {
  remove(process.argv[3]);
} else if (process.argv[2] === 'edit') {
  edit(process.argv[3]);
} else {
  console.log('Invalid command');
}
