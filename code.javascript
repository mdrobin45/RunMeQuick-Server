function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNumber = generateRandomNumber(1, 100); // Adjust the range as needed
console.log("Random Number:", randomNumber);
