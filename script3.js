// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true any string that is not an empty string has a value of true
console.log(Boolean("")); // false because it's empty string

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height; // we did not sign it any value so it's undefined
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

let theHeight = 1;
if (theHeight) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
