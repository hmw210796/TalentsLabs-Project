let playAgain = true;

while (playAgain) {
  const prompt = require('prompt-sync')({sigint: true});
 
  // Random number from 1 - 100
  let numberInMind = Math.floor(Math.random() * 100) + 1;

  // This variable is used to determine if the app should continue prompting the user for input
  let foundCorrectNumber = false;

 
  while (!foundCorrectNumber) {
    // Step 1: Get user input (don't forget that the input is a string)
    const number = prompt("Guess the number in my mind (1-100):");
   
    // Step 2: Compare the guess to the secret answer and
    // let the user know the feedback (too large, too small, correct).
    if (number > numberInMind) {
      console.log("Number is too big");
    } else if (number < numberInMind) {
      console.log("Number is too small");
    } else if (number == numberInMind) {
      console.log("You Win!");
      foundCorrectNumber = true;
    } 
  };

  
  // Bonus Point: prompt user and provide option for user to start a new game after winning
  let askAgain = true; // Prompt users to input Y/N
  while (askAgain) {
    var newGame = prompt("Do you want to start a new game? (Y/N) ");
    if (newGame == "N") {
      playAgain = false;
      askAgain = false;
    } else if (newGame == "Y") {
      playAgain = true;
      askAgain = false;
    }
  } 
};

