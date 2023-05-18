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

// app.get('/api/grades/:gradeId', async (req, res) => {
//   try {
//     const gradeId = Number(req.params.gradeId);
//     if (Math.sign(gradeId) !== 1) {
//       res.status(400).json({ error: '"gradeId" must be a positive integer' });
//       return;
//     }
//     const sql = `
//     select *
//     from "grades"
//     where "gradeId" = 1
//     `;
//     const params = [gradeId];
//     const result = await db.query(sql, params);
//     const grade = result.rows[0];
//     if (grade) {
//       res.status(200).json(grade);
//     } else {
//       res
//         .status(404)
//         .json({ error: `Cannt find grade with "gradeId" ${gradeId}` });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'An unexpected error occured.' });
//   }
// });

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
