//Boolean

const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision); // or
console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = true; // A
console.log(hasDriversLicence || hasGoodVision || isTired);
console.log(hasDriversLicence && hasGoodVision && isTired);

// true  and false is false
// true or false is true

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
