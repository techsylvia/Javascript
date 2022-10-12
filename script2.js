// merging between types
//converting a string into a number or number into a boolean
//type conversion
//type coersion : automatically converts behind the scenes

//type conversion
const inputYear = "1991";
console.log(Number(inputYear)); // will return the string as a number
console.log(Number(inputYear) + 18); // will return the string as a number and add 18 to it

console.log(Number("Jonas"));

console.log(String(23), 23); // will return the number as a string

// type coercion
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old"); // will return a string
console.log("23" - "10" - 3); // will return a number
console.log("23" * "2"); // will return a number
console.log("23" > "18"); // will return a boolean
console.log("23" < "18"); // will return a boolean
console.log(23 / 2);

let n = "1" + 1; // "11"
n = n - 1; // 10
console.log(n);

let s = "10" - "4" - "3" - 2 + "5"; // 15
console.log(s);
