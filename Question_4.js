function generateSequence(length) {
    
    // fixed value for the first 2 arrayW
    const sequence = [1, 2];
    
    for (let i = 2; i < length; i++) {
      if (i % 2 === 0) {
        sequence[i] = sequence[i - 1] * sequence[i - 2];
      } else {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
      }
    }
    
    return sequence.join();
  }

// Trigger the funtion to generate array with size of seven
const result = generateSequence(7);

console.log(result);

//OUTPUT for every iteration
//S[0]=1
//S[1]=2
//S[2]=2
//S[3]=4
//S[4]=8
//S[5]=12
//S[6]=96