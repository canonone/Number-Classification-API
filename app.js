const express = require("express");
const cors = require("cors");
const { classifyNumber } = require("./utils/numberUtils");
const { fetchFunFact } = require("./utils/fetchFunFact");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.redirect("/api/classify-number");
});
app.get("/api/classify-number", async (req, res) => {
  // Check if the `number` query parameter is missing
  if (!req.query.number) {
    return res.status(400).json({
      number: null,
      error: true,
    });
  }
  const number = req.query.number * 1;

  if (isNaN(number) || !Number.isInteger(number)) {
    return res.status(400).json({
      number: req.query.number,
      error: true,
    });
  }

  const properties = classifyNumber(number);
  const funFact = await fetchFunFact(number);

  res.status(200).json({
    number,
    is_prime: properties.isPrime,
    is_perfect: properties.isPerfect,
    properties: properties.properties,
    digit_sum: properties.digitSum,
    fun_fact: funFact,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
