import dotenv from "dotenv";
import mysql from "mysql";
import cors from "cors";
import express, { json } from "express";

dotenv.config();

const app = express();
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.use(express.json());
app.use(cors());

app.get("/student", (req, res) => {
  const q = "SELECT * FROM student";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/byid/:student_id", (req, res) => {
  const getid = req.params.student_id;
  const q = "SELECT * from student WHERE `student_id` = (?)";
  db.query(q, [getid], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/student", (req, res) => {
  const q = "INSERT INTO student (`first_name`, `last_name`) VALUES (?)";

  const values = [req.body.first_name, req.body.last_name];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("student has been created successfully");
  });
});

app.delete("/student/:id", (req, res) => {
  const studentId = req.params.id;
  const q = "DELETE FROM student WHERE student_id = ?";

  db.query(q, [studentId], (err, data) => {
    if (err) return res.send(err);
    return res.json("student delete successfully");
  });
});

app.put("/student/:id", (req, res) => {
  const studentId = req.params.id;
  const q =
    "UPDATE student SET `first_name`= ?, `last_name`= ? WHERE student_id = ?";

  const values = [req.body.first_name, req.body.last_name];
  db.query(q, [...values, studentId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("connected to backend and server running");
});
