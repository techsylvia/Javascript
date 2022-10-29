// function expression
//const calcAge2 = function (birthYear) {
//return 2022 - birthYear;
//};

// arrow function
const calcAge3 = (birthYear) => 2040 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// function
const yearsUntilRetirement = (birthYear) => {
  const age = 2040 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1991));
