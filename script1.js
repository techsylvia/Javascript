// challenge number 2

// Variables
const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

// calculate theor BMIs
const markBmi = markWeight / markHeight ** 2;
const johnBmi = johnWeight / johnHeight ** 2;

if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
} else {
  console.log(`John's BMI is higher than Marks's!`);
}
