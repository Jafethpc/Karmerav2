const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const path = require("path");

const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/build");
app.use(express.static(buildPath));

app.use(express.urlencoded({ limit: "100mb", extended: "true" }));
app.use(express.json({ limit: "100mb" }));
app.use(cors());

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "J@feth2003",
  database: "karmera",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/products", (req, res) => {
  con.query(
    `SELECT p.name, p.price, p.review, p.image, p.description, b.brand, m.megapixels, s.sensor_size, a.availability
FROM Products p
JOIN Brands b ON p.brand_id = b.brand_id
JOIN Megapixels m ON p.megapixels_id = m.megapixels_id
JOIN Sensor_Size s ON p.sensor_size_id = s.sensor_size_id
JOIN Availability a ON p.availability_id = a.availability_id;`,
    function (error, results) {
      if (error) throw error;

      res.send(JSON.stringify(results));
    }
  );
});

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("../client/build/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
