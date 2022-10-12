//Equality Operators == vs. ===
// == checks for equality of value only
// === checks for equality of value and type

const age = 18;
if (age === 18) console.log(" you are an adult");

//
if (age == 18) console.log(" you are an adult");

//
const edad = "18";
if (edad === 18) console.log(" you are an adult (strict) ");

//
if (age == 18) console.log(" you are an adult (loose) ");

// there will be a pop up but we need to store it somewhere to use it
prompt("what is your favourite number?"); // so let's create a variable !

const favourite = prompt("what is your favourite number?");
console.log(favourite);
console.log(typeof favourite); // will return a string

if (favourite == 23) {
  // 23 === 23
  console.log("cool! 23 is an amazing number!");
}
