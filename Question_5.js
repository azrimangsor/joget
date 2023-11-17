// Declare variable
let total = 0;

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
// Create an array of 10 random integers
const randomNumbers = Array.from({ length: 10 }, () => getRandomInt(1, 1000));

// Display random number and add every number into previous to give the sum value
randomNumbers.forEach((number, index) => {
  console.log(`Random Numbers ${index + 1}: ${number}`);
  total += number
});

// Display sum value
console.log("\nSum: "+total)
  