import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';
const app = express();
app.use(express.json());

async function readData() {
  const file = await readFile('data.json');
  return await JSON.parse(file);
}
const data = await readData();
async function dataToJson() {
  const newObj = JSON.stringify(data, null, 2);
  await writeFile('data.json', newObj);
}

app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const key in data.notes) {
    arr.push(data.notes[key]);
  }
  res.status(200).json(arr);
});

app.get('/api/notes/:id', (req, res) => {
  const note = req.params.id;
  if (Math.sign(note) !== 1) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!data.notes[note]) {
    res.status(404).send({ error: 'cannot find note with id ' + note });
  } else {
    res.status(200).send(data.notes[note]);
  }
});

app.post('/api/notes', (req, res) => {
  if (req.body === undefined) {
    res.status(400).send({ error: 'content is a required field' });
  } else if (req === Error) {
    res.status(500).send({ error: 'An unexpected error occured.' });
  } else {
    const newNote = data.nextId;
    data.notes[newNote] = req.body;
    data.notes[newNote].id = data.nextId++;
    dataToJson();
    res.send(req.body).json(data.notes[newNote]).status(201);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const note = req.params.id;
  if (Math.sign(note) !== 1) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!data.notes[note]) {
    res.status(404).send({ error: 'cannot find note with id ' + note });
  } else if (req.body === Error) {
    res.status(500).send({ error: 'An unexpected error occured.' });
  } else {
    delete data.notes[note];
    dataToJson();
    res.status(204).send(res.body);
  }
});

app.put('/api/notes/:id', (req, res) => {
  const note = req.params.id;
  if (Math.sign(note) !== 1) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!data.notes[note]) {
    res.status(404).send({ error: 'cannot find note with id ' + note });
  } else if (req.body === Error) {
    res.status(500).send({ error: 'An unexpected error occured.' });
  } else if (req.body.content === undefined) {
    res.status(400).send({ error: 'content field is required' });
  } else {
    data.notes[note].id = req.params.id;
    dataToJson();
    res.status(204).send(req.body);
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
