import express from 'express';
const app = express();
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const key in grades) {
    arr.push(grades[key]);
  }
  res.json(arr);
});

// const id = process.argv[3].slice(26)
app.delete('/api/grades/id', (req, res) => {
  delete grades[req.params.id];
  res.sendStatus(204);
});

app.listen(8080, () => {
  console.log('Server is active on port 8080');
});
