
//Dependencias
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config({ path: "./config.env" });

//connection
const {testConnection, syncDatabase} = require("./bd/db");

//associations
require("./bd/associations");

app.use(cors());
app.use(express.json());

// routes
app.use(require("./routes/login"));
app.use(require("./routes/signUp"));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
  testConnection();
  syncDatabase();
});
