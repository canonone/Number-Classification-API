const express = require("express");
const cors = require("cors");
const classifyNumber = require("./controller/numberController");

const app = express();

// Middleware
app.use(cors());
app.use((req, res, next) => {
  res.status(400).json({ number: null, error: true });
});

// API endpoint to classify a number
app.get("/api/classify-number", classifyNumber);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
