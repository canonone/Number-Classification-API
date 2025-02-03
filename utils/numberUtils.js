const axios = require("axios");

// Get factors of a number (excluding the number itself)
function getFactors(num) {
  let factors = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

// check if a number is Armstrong
function isArmstrong(num) {
  let strNum = num.toString();
  let power = strNum.length;
  let sum = 0;

  for (let digit of strNum) {
    sum += Number(digit) ** power;
  }

  return sum === num;
}

// check if a number is Prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// check if a number is Odd
function isOdd(num) {
  return num % 2 !== 0;
}

// check if a number is Even
function isEven(num) {
  return num % 2 === 0;
}

// check if a number is Perfect
function isPerfect(num) {
  const factors = getFactors(num);
  const sumOfFactors = factors.reduce((sum, factor) => sum + factor, 0);
  return sumOfFactors === num;
}

// Get fun fact from Numbers API
async function getFunFact(num) {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}?json`);
    return response.data.text;
  } catch (error) {
    return `Could not fetch fun fact for number ${num}`;
  }
}

// Export each function
module.exports = {
  isArmstrong,
  isPrime,
  isOdd,
  isEven,
  isPerfect,
  getFunFact,
};
