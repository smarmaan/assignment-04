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