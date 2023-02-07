// ======================================                                               ======================================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~                 Problem 1: Let’s play a mind game                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ======================================                                               ======================================

function mindGame(numberValue) {
  // ============== "Here ~number~ is a parameter.. which will take the input provided by the user while calling the function mindGame()..."

  let result = 0;

  if (typeof numberValue !== "number" || numberValue < 0) {
    //   ============= as per condition the input must be a positive number... So provided number have to be bigger or equal to 0...

    // ====== also to assure the provided value is a number.. not a string value or something else... the ~~ typeof ~~ condition is required...

    return "Please..!! Input a valid ~ POSITIVE ~ number...";

  } else {

    result = (numberValue * 3 + 10) / 2 - 5;

    // ======= according to BODMAS rules of  mathematical calculation expressions.
  }

  return result;

  // ~~ return result ~~ indicates that the summation will be returned to the caller of function. And as a result the value can be stored and also can be printed.

}


// =============== This ~~~ mindGame() ~~~ function takes the positive number and return us the calculated value of ( ( ( ( input * 3 ) + 10 ) / 2 ) - 5 )....
// if the input value is not correct or doesn't meet the requirement it will show an error message... 


// let example01 = mindGame(5);
// console.log(example01);

// let example02 = mindGame([2, 3, 4, 5]);
// console.log(example02);

// let example03 = mindGame(-33);
// console.log(example03);

// let example04 = mindGame("0");
// console.log(example04);

// let example05 = mindGame({ a: 3, b: 6, c: 85 });
// console.log(example05);

// let example06 = mindGame(true);
// console.log(example06);

// let example07 = mindGame();
// console.log(example07);
