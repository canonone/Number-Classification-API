# Number Classification API

## Description

This API takes a number as input and returns interesting mathematical properties about it, including whether it's prime, perfect, and more. It also provides a fun fact related to the number.

## Features

- Classify Number: Classifies a given number and checks for:
  - Prime number
  - Perfect number
  - Armstrong number
  - Odd or Even
- Fun Fact: Fetches a fun fact about the number from Numbers API (note: the fun fact is dynamic and may change with every request).

## Technology Stack

- **Programming Language**: JavaScript (Node.js)
- **Web Framework**: Express.js
- **Deployment**: [Heroku, AWS, or any cloud platform of your choice]
- **CORS Handling**: CORS middleware for Express
- **API Response Format**: JSON

## Installation

To set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/canonone/HNG_12.git
   ```

2. Navigate to the project directory:

   ```bash
    cd stage_1
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the API:

   ```bash
   node app.js
   ```

5. Access the API via `http://localhost:<port>/api/classify-number?number=<your-number>`

## API Endpoint

**GET** `/api/classify-number?number=<number>`

### Query Parameters:

- `number`: The number you want to classify. Must be a valid integer.

### Successful Response (200 OK):

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

## Related Links

For more information on Node.js professionals, visit:

- [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

## License

This project is open-source and available under the [MIT License](LICENSE).
