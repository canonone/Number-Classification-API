const axios = require("axios");

const fetchFunFact = async (number) => {
  try {
    const response = await axios.get(
      `http://numbersapi.com/${number}/math?json`
    );
    return response.data.text;
  } catch (error) {
    return `No fun fact available for ${number}`;
  }
};

module.exports = { fetchFunFact };
