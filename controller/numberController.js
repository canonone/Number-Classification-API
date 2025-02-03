const {
  isArmstrong,
  isPrime,
  isOdd,
  isEven,
  isPerfect,
  getFunFact,
} = require("./../utils/numberUtils");

async function classifyNumber(req, res) {
  let number = req.query.number;

  // check if the input is an alphabet
  if (/^[a-zA-Z]+$/.test(number)) {
    return res.status(400).json({ error: true, number: number });
  }

  // handle non-numeric inputs and convert to absolute value
  number = parseInt(number);
  if (isNaN(number)) {
    return res.status(400).json({ error: true, message: "Invalid number" });
  }

  // handle negative numbers by converting to absolute value
  number = Math.abs(number);

  const result = {
    number: number,
    is_prime: isPrime(number),
    is_perfect: isPerfect(number),
    properties: [],
    digit_sum: number
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0),
    fun_fact: await getFunFact(number),
  };

  // determine the properties
  if (isArmstrong(number)) result.properties.push("armstrong");
  if (isOdd(number)) result.properties.push("odd");
  else if (isEven(number)) result.properties.push("even");

  // send the response
  return res.status(200).json(result);
}

module.exports = classifyNumber;
