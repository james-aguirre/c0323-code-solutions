import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';
const app = express();
app.use(express.json());

async function readData() {
  const file = await readFile('data.json', 'utf8');
  return await JSON.parse(file);
}

// added a parameter of data to this function so not to rely on a global variable of data that could be outdated
async function writeData(data) {
  const newObj = JSON.stringify(data, null, 2);
  await writeFile('data.json', newObj);
}

app.get('/api/notes', async (req, res) => {
  // added await readData to every read function in order to get the most recent data before each request,
  // not relevant for this exercise but relevant in
  const data = await readData();
  const arr = [];
  for (const key in data.notes) {
    arr.push(data.notes[key]);
  }
  res.status(200).json(arr);
});

app.get('/api/notes/:id', async (req, res) => {
  // added await readData to every read function in order to get the most recent data before each request,
  // not relevant for this exercise but relevant for future use
  const data = await readData();
  const note = req.params.id;
  if (Math.sign(note) !== 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[note]) {
    res.status(404).json({ error: 'cannot find note with id ' + note });
  } else {
    res.status(200).json(data.notes[note]);
  }
});

app.post('/api/notes', async (req, res) => {
  // added await readData to every read function in order to get the most recent data before each request,
  // not relevant for this exercise but relevant for future use
  const data = await readData();
  if (req.body === undefined) {
    // returning errors in json because we are returning an object, which we want to have json encoded
    res.status(400).json({ error: 'content is a required field' });
  } else if (req instanceof Error) {
    // returning errors in json because we are returning an object, which we want to have json encoded
    res.status(500).json({ error: 'An unexpected error occured.' });
  } else {
    const newNote = data.nextId;
    data.notes[newNote] = req.body;
    data.notes[newNote].id = data.nextId++;
    // added writeData to every function manipulating notes so the changes save to json file
    await writeData(data);
    res.status(201).json(data.notes[newNote]);
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  // added await readData to every read function in order to get the most recent data before each request,
  // not relevant for this exercise but relevant for future use
  const note = req.params.id;
  const data = await readData();
  if (Math.sign(note) !== 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[note]) {
    res.status(404).json({ error: 'cannot find note with id ' + note });
    // returning errors in json because we are returning an object, which we want to have json encoded
  } else if (req instanceof Error) {
    res.status(500).json({ error: 'An unexpected error occured.' });
  } else {
    delete data.notes[note];
    // added writeData to every function manipulating notes so the changes save to json file
    await writeData(data);
    res.body = null;
    res.status(204).json(res.body);
  }
});

app.put('/api/notes/:id', async (req, res, next) => {
  // added await readData to every read function in order to get the most recent data before each request,
  // not relevant for this exercise but relevant for future use
  const data = await readData();
  const note = req.params.id;
  if (Math.sign(note) !== 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[note]) {
    res.status(404).json({ error: 'cannot find note with id ' + note });
  } else if (req instanceof Error) {
    res.status(500).json({ error: 'An unexpected error occured.' });
  } else if (req.body.content === undefined) {
    res.status(400).json({ error: 'content field is required' });
  } else {
    data.notes[note] = req.body;
    data.notes[note].id = req.params.id;
    // added writeData to every function manipulating notes so the changes save to json file
    await writeData(data);
    await res.status(204).json(req.body);
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
