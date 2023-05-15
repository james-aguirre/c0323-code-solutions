import express from 'express';
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const key in grades) {
    arr.push(grades[key]);
  }
  res.json(arr);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId++;
  res.send(req.body).status(201).end();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
