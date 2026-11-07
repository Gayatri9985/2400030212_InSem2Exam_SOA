const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  host: "app-db",
  port: 5432,
  database: "appdb",
  user: "appuser",
  password: "apppassword"
});

app.get("/api/data", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Application connected to database!",
      databaseTime: result.rows[0].now
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(8080, () => {
  console.log("App running on port 8080");
});