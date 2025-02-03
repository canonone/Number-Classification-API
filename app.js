const express = require("express");
const cors = require("cors");
const classifyNumber = require("./controller/numberController");

const app = express();

// Middleware
app.use(cors());

// API endpoint to classify a number
app.get("/", (req, res) => {
  res.redirect("/api/classify-number");
});
app.get("/api/classify-number", classifyNumber);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
