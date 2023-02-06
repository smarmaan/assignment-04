// ======================================                                               ======================================
// ======================================                                               ======================================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~                 Problem 1: Let’s play a mind game                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ======================================                                               ======================================
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

let a = mindGame(5);
console.log(a);

// ======================================                                               ======================================
// ======================================                                               ======================================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~                  Problem 2: Finding even or odd                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ======================================                                               ======================================
// ======================================                                               ======================================

function evenOdd(string_value) {
  const stringLength = string_value.length;
  // stringLength variable holds the length of string_value. In string every alphabet or any character holds a index similar to array but not same as array...
  if (typeof string_value !== "string") {
    return "Please..!! Input a ~ String ~ value... ";
    // this ~~~ typeof string_value !== "string" ~~~ condition represents the type of value must be a String... If user doesn't gives a string value. this condition will return an error message as a result...
  } else if (stringLength % 2 === 0) {
    return "even";
    // this ~~~ (stringLength % 2 === 0) condition refers to an "even" number.. If any Integer number is divided by 2 and the reminder is "0". Then it will be considered as an EVEN number. And if the reminder isn't "0" it's an ODD number...
  } else {
    return "odd";
    // if the above conditions doesn't meet the requirement "odd" will be returned as a result. cause that means the reminder isn't "0".
  }
}

let b = evenOdd("1234567890");
console.log(b);

// ======================================                                               ======================================
// ======================================                                               ======================================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~             Problem 3: Is Less or Greater than seven              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ======================================                                               ======================================
// ======================================                                               ======================================

function isLGSeven(numberValue) {
  let result = 0;

  if (typeof numberValue !== "number") {
    //   ============= as per condition the input must be a number...
    // ====== also to assure the provided value is a number.. not a string value or something else... the ~~ typeof ~~ condition is required...
    return "Please..!! Input a valid `NUMBER` !!";
  } else {
    result = numberValue - 7;
    //  as per requirement the result is the difference between the INPUT value and 7.... difference can be either positive or negative..
    if (result < 7) {
      return result;
      //  if the difference between input value and 7 is less than 7 then this function will return the result value in parameter as a result...
    } else {
      return numberValue * 2;
      //   if the difference is more than or equal to 7 then the function will multiply the input value by 2 and return the output as a result..
    }
  }
}

let c = isLGSeven(6);
console.log(c);

// ======================================                                               ======================================
// ======================================                                               ======================================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~                    Problem 4: Finding Bad data                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ======================================                                               ======================================
// ======================================                                               ======================================

function findingBadData(numberArray) {
  let badData = [];

  //   badData is an empty array. it has no element right now...

  if (Array.isArray(numberArray) !== true) {
    return "Please..!! Input a valid ~~ Array ~~ of numbers...";

    // this condition is for checking the input value is an array or not... if the input value is not an array it will give a error message.
  } else {
    for (let i = 0; i < numberArray.length; i++) {
      // this loop is for generating the values of array serially.

      const element = numberArray[i];

      //   element store the values which was generated by the loop...

      if (element < 0) {
        badData.push(element);

        //  the values which were smaller than "0" was pushed or added into a new array called "badData"...
      }
    }
  }

  return badData.length;
  //   as all the Bad Data was pushed into an array called "badData"... So the badData array's length which refers to the number of elements in badData... array is equal to the number of Bad Data that Input array has...
}

const numbers = [1, 2, 5, -10];
const d = findingBadData(numbers);
console.log(d);

// ======================================                                               ======================================
// ======================================                                               ======================================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~             Problem 5: Convert your gems into diamond             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ======================================                                               ======================================
// ======================================                                               ======================================

function gemsToDiamond(gemsOfFriend1, gemsOfFriend2, gemsOfFriend3) {
  // gemsOfFriend1,gemsOfFriend2,gemsOfFriend3 are the parameter of this "gemsToDiamond" function. those parameter will grab the input value provided by the user...

  if (
    typeof gemsOfFriend1 === "number" &&
    Number.isInteger(gemsOfFriend1) &&
    gemsOfFriend1 >= 0 &&
    typeof gemsOfFriend2 === "number" &&
    Number.isInteger(gemsOfFriend2) &&
    gemsOfFriend2 >= 0 &&
    typeof gemsOfFriend3 === "number" &&
    Number.isInteger(gemsOfFriend3) &&
    gemsOfFriend3 >= 0
  ) {
    // this condition checks if the provided value is a Number type or not... if the provided value is not number it will give an error message..
    // this condition also assures the value is integer or not.. as Gems can not be in fraction value.. user must submit a integer value...
    // as gems can't be in negative number.. so it's least value have to be 0 or more than that...

    total_diamond =
      gemsOfFriend1 * 21 + gemsOfFriend2 * 32 + gemsOfFriend3 * 43;
    // this calculation refers to the total gem power converted into Diamond...
    if (total_diamond >= 1000 * 2) {
      result = total_diamond - 2000;
      return result;

    //   if the total diamond is more than or equal to double of 1000.. we have to subtract 2000 and then return the result to the function caller...then is can be stored in a variable or can be printed...
    } else {
      return total_diamond;

    //   if the diamond is less than 2000 .. the number of total diamond will returned to the function caller... then is can be stored in a variable or can be printed...
    }
  } else {
    return "Please..!! Input a valid ~~~INTEGER NUMBER >= 0 ~~~ to continue...";
    // if the input isn't a valid Integer number and is not equal or greater than 0 .. this will return the error message...
  }
}

let e = gemsToDiamond(100, 5, 15);
console.log(e);
