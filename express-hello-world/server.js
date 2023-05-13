import express from 'express';

const app = express();

app.use((req, res) => {
  console.log(req.method);
  res.send('SERVER IS LIVE');
});

app.listen(8080, () => {
  console.log('Server is active');
});
