import express from 'express';
const app = express();

const nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const key in grades) {
    arr.push(grades[key]);
  }
  res.json(arr);
});

express.json();
app.use('/api/grades', (req, res) => {
  req.express.json();
});

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  res.status(201).send(req.id, req.body);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
