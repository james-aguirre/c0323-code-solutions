import express from 'express';
import { readFile } from 'node:fs/promises';

const app = express();
app.use(express.json());

async function readData() {
  const file = await readFile('data.json');
  return await JSON.parse(file);
}
const data = await readData();

app.get('/api/notes', async (req, res) => {
  const arr = [];
  for (const key in data) {
    arr.push(data[key]);
  }
  res.status(200).json(arr);
});

// app.post('/api/notes', (req, res) => {
//   grades[nextId] = req.body;
//   grades[nextId].id = nextId++;
//   res.send(req.body).json(grades[nextId]).status(201);
// });
// app.delete('/api/notes/:id', (req, res) => {
//   delete grades[req.params.id];
//   res.sendStatus(204);
// });

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
