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
    return "Please..!! Input a valid ~~~INTEGER NUMBER >= 0 ~~~ to continue...";
    // if the input isn't a valid Integer number and is not equal or greater than 0 .. this will return the error message...
  }
}

let e = gemsToDiamond(100, 5, 15);
console.log(e);
