const express = require("express");
 const cors = require("cors");
const pool = require("./db");
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.get("/", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM enquiry");
    res.status(200).send(data.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await pool.query("INSERT INTO enquiry (name,email,message) VALUES ($1,$2,$3)", [
      name,
      email,
      message
    ]);
    res.status(200).send({
      message: "Successfully added child.",
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.get("/setup", async (req, res) => {
  try {
    await pool.query(
      "CREATE TABLE enquiry (id SERIAL PRIMARY KEY, name VARCHAR(75),email VARCHAR(50), message VARCHAR(300))"
    );
    res.status(200).send({
      message: "Successfully created table.",
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));
