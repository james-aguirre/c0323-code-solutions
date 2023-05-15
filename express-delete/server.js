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
app.delete('/api/grades/12', (req, res) => {
  delete grades[12];
  res.sendStatus(204);
});

app.delete('/api/grades/273', (req, res) => {
  delete grades[273];
  res.sendStatus(204);
});

app.delete('/api/grades/47', (req, res) => {
  delete grades[47];
  res.sendStatus(204);
});

app.listen(8080, () => {
  console.log('Server is active');
});
