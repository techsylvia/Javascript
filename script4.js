//Equality Operators == vs. ===
// == checks for equality of value only
// === checks for equality of value and type

const age = 18;
if (age === 18) console.log(" you are an adult");

//
if (age == 18) console.log(" you are an adult");

//
const edad = "18";
if (edad === 18) console.log(" you are an adult (strict) "); //it does not perform type coersion
// it only returns tru when both values are exactly the same

//
if (age == 18) console.log(" you are an adult (loose) "); // does type coersion

// there will be a pop up but we need to store it somewhere to use it
prompt("what is your favourite number?"); // so let's create a variable !

const favourite = Number(prompt("what is your favourite number?"));
console.log(favourite);
console.log(typeof favourite); // will return a string

if (favourite === 23) {
  // 23 === 23
  console.log("cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("why not 23?");
