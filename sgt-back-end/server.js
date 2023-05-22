import express from 'express';
import pg from 'pg';
const app = express();
app.use(express.json());
// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
    select *
    from "grades"
    `;
    const result = await db.query(sql);
    const grade = result.rows;
    res.status(200).json(grade);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.post('/api/grades', async (req, res) => {
  try {
    const { name, course } = req.body;
    const score = Number(req.body.score);
    if (Math.sign(score) !== 1 || !name || !course) {
      return res.status(400).send({
        error: 'Invalid input, please supply a valid name, course and integer',
      });
    }
    const sql = `insert into "grades" ("name", "course", "score")
   values($1, $2, $3)
   returning *`;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const [grades] = result.rows;
    res.status(201).json(grades);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = req.params.gradeId;
    const { name, course } = req.body;
    const score = Number(req.body.score);
    if (Math.sign(score) !== 1 || !name || !course) {
      return res.status(400).send({
        error: 'Invalid input, please supply a valid name, course and integer',
      });
    }
    const sql = `update "grades"
    set "name" = $2,
    "course" = $3,
    "score" = $4
    where "gradeId" = $1
    returning *`;
    const params = [gradeId, name, course, score];
    const result = await db.query(sql, params);
    const updatedGrade = result.rows[0];
    if (result.rows.length === 0) {
      return res
        .status(404)
        .send({ error: `Grade with gradeId ${gradeId} not found` });
    }
    res.status(200).json(updatedGrade);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = req.params.gradeId;
    const params = [gradeId];
    const sql = `delete from "grades"
  where "gradeId" = $1`;
    if (Math.sign(gradeId) !== 1) {
      return res.status(400).send({
        error: 'Invalid input, please supply gradeId as a positive integer',
      });
    }
    const result = await db.query(sql, params);
    const deletedGrade = result.rows;
    if (result.rows.length === 1) {
      return res.sendStatus(204);
    }
    return res.sendStatus(404, `Grade with gradeId ${deletedGrade} not found`);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (Math.sign(gradeId) !== 1) {
      return res
        .status(400)
        .json({ error: 'gradeId must be a positive integer' });
    }
    const sql = `
     select *
     from "grades"
     where "gradeId" = $1
     `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.status(200).json(grade);
    } else {
      res
        .status(404)
        .json({ error: `Cannt find grade with gradeId ${gradeId}` });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
