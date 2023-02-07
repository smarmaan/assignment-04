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