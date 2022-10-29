//
//
//
//function declaration
function calcAge1(birthYear) {
  //input = parameter
  return 2022 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(1991); //argument

console.log(age1, age2);
