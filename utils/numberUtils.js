const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isPerfect = (num) => {
  if (num < 2) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num;
};

const isArmstrong = (num) => {
  const digits = String(num).split("");
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), digits.length),
    0
  );
  return sum === num;
};

const getDigitSum = (num) => {
  return num
    .toString()
    .replace("-", "")
    .split("")
    .map(Number)
    .reduce((sum, digit) => sum + digit, 0);
};

const classifyNumber = (num) => {
  const properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  if (num % 2 !== 0) properties.push("odd");
  if (num % 2 === 0) properties.push("even");

  return {
    isPrime: isPrime(num),
    isPerfect: isPerfect(num),
    properties,
    digitSum: getDigitSum(num),
  };
};

module.exports = { classifyNumber };
