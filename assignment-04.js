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
  

  // ======================================                                               ======================================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~                  Problem 2: Finding even or odd                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ======================================                                               ======================================

function evenOdd(string_value) {

    const stringLength = string_value.length;
  
    // stringLength variable holds the length of string_value. In string every alphabet or any character holds a index similar to array but not same as array...
  
    if (typeof string_value !== "string") {
  
      return "Please..!! Input a ~ String ~ value... ";
  
      // this ~~~ typeof string_value !== "string" ~~~ condition represents the type of value must be a String... If user doesn't gives a string value. this condition will return an error message as a result...
  
    } 
    
    
    else if (stringLength % 2 === 0) {
      
      return "even";
  
      // this ~~~ (stringLength % 2 === 0) condition refers to an "even" number.. If any Integer number is divided by 2 and the reminder is "0". Then it will be considered as an EVEN number. And if the reminder isn't "0" it's an ODD number...
  
    } else {
  
      return "odd";
  
      // if the above conditions doesn't meet the requirement "odd" will be returned as a result. cause that means the reminder isn't "0".
  
    }
  
  }
  
  // This ~~~ evenOdd() ~~~ function takes a string as an input.. and check out input's length... if the length is EVEN it returns "even"... if the length is ODD... it returns "odd"...
  // if the input value is not correct or doesn't meet the requirement it will show an error message... 
  
  
  // let example08 = evenOdd("1234567890");
  // console.log(example08);
  
  // let example09 = evenOdd(true);
  // console.log(example09);
  
  // const example10 = evenOdd(1);
  // console.log(example10);
  
  // const example11 = evenOdd({ a: 3, b: 6, c: 85 });
  // console.log(example11);
  
  // const example12 = evenOdd([2, 3, 4, 5]);
  // console.log(example12);
  
  // const example13 = evenOdd("Phero")
  // console.log(example13);
  
  // const example14 = evenOdd("Batch7")
  // console.log(example14);
  
  // const example15 = evenOdd("chatgpt")
  // console.log(example15);


  // ======================================                                               ======================================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~             Problem 3: Is Less or Greater than seven              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
  
  // The ~~~ isLGSeven() ~~~ functions takes a NUMBER value as input.. it measures the difference between input and number 7... if the difference is less than 7 it returns the result as an output..
  
  //  If the difference is more or equal to 7 ... it multiply the input value with 2 and return it as an output...
  
  
  // const example16 = isLGSeven(6);
  // console.log(example16);
  
  // const example17 = isLGSeven(-15);
  // console.log(example17);
  
  // let example18 = isLGSeven(15);
  // console.log(example18);
  
  // const example19 = isLGSeven([2, 3, 4, 5]);
  // console.log(example19);
  
  // const example20 = isLGSeven({ a: 3, b: 6, c: 85 });
  // console.log(example20);
  
  // let example21 = isLGSeven(true);
  // console.log(example21);
  
  // const example22 = isLGSeven("23465");
  // console.log(example22);
  
  // let example23 = isLGSeven(1.75122);
  // console.log(example23);


  // ======================================                                               ======================================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~                    Problem 4: Finding Bad data                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
  
  
  // this ~~~~ findingBadData() ~~~~ function takes array as an input.. then sort it by adding negative numbers in an empty array..
  
  // calculates the array length and return the length as a result... cause it represents how many Bad Data or negative number the actual array has.... 
  
  
  
  // const example24 = findingBadData([1, 2, 5]);
  // console.log(example24);
  
  // const example25 = findingBadData([2, -5, -7, -13]);
  // console.log(example25);
  
  // const example26 = findingBadData([-4, -9, -5, -33, -55]);
  // console.log(example26);
  
  // const example32 = findingBadData([]);
  // console.log(example32);
  
  // const example27 = findingBadData({ a: 3, b: 6, c: 85 });
  // console.log(example27);
  
  // let example28 = findingBadData("23465");
  // console.log(example28);
  
  // let example29 = findingBadData(true);
  // console.log(example29);
  
  // let example30 = findingBadData(1056411564512);
  // console.log(example30);
  
  // const example31 = findingBadData([-4, -9, -5, -33, -55, 20, -51, -41, -7]);
  // console.log(example31);

  
  // ======================================                                               ======================================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~             Problem 5: Convert your gems into diamond             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
  
      return "Please..!! Input valid ~~~(POSITIVE)-(INTEGER)-(NUMBER's)~~~ to continue...";
  
      // if the input isn't a valid Integer number and is not equal or greater than 0 .. this will return the error message...
  
    }
  
  }
  
  
  //  This ~~~ gemsToDiamond() ~~~ takes 3 input.. 3 inputs have to be taken.. all of them should be numbers... it calculates the number and return the result to the function caller variable to store or print... if inputs are not number it will show error message...
  
  
  
  // let example33 = gemsToDiamond(1, 1, 1);
  // console.log(example33);
  
  // const example34 = gemsToDiamond(20, 200, 50);
  // console.log(example34);
  
  // const example41 = gemsToDiamond(20, 200);
  // console.log(example41);
  
  // const example42 = gemsToDiamond(20, 200, "20");
  // console.log(example42);
  
  // const example43 = gemsToDiamond(20, 200, { a: 3, b: 6, c: 85 });
  // console.log(example43);
  
  // const example35 = gemsToDiamond(100, 5, 1);
  // console.log(example35);
  
  // const example36 = gemsToDiamond(1056411564512);
  // console.log(example36);
  
  // const example37 = gemsToDiamond(true);
  // console.log(example37);
  
  // const example38 = gemsToDiamond("23465");
  // console.log(example38);
  
  // const example39 = gemsToDiamond({ a: 3, b: 6, c: 85 });
  // console.log(example39);
  
  // const example40 = gemsToDiamond([-4, -9, -5, -33, -55]);
  // console.log(example40);
  

