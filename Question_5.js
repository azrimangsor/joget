// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Create an array of 10 random integers
  const randomNumbers = Array.from({ length: 10 }, () => getRandomInt(1, 1000));
  
  // Display each number in the array
  console.log("Random Numbers:");
  
  randomNumbers.forEach((number, index) => {
    console.log(`Number ${index + 1}: ${number}`);
  });
  
  // Calculate and display the sum of the array
  const sum = randomNumbers.reduce((acc, num) => acc + num, 0);
  console.log(`\nSum of the array: ${sum}`);
  