import dotenv from "dotenv";
import mysql from "mysql";
import cors from "cors";
import express from "express";

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

app.post("/student", (req, res) => {
  const q = "INSERT INTO student (`first_name`, `last_name`) VALUES (?)";
  //INSERT INTO `student` (`first_name`, `last_name`) VALUES ('hello', 'world');
  const values = [req.body.first_name, req.body.last_name];

  db.query(q, [values], (err, data) => {
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("connected to backend and server running");
});
