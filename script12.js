//let d = new Date();
//let hr = d.getHours();
//console.log(hr);
//et min = d.getMinutes();
//console.log(min);
//let sec = d.getSeconds();
//console.log(sec);
//let time = d.toLocaleTimeString();

//console.log("Current time is: " + time);

//console.log(
// "Today is: " + new Date().toLocaleString("en-us", { weekday: "long" })
//);

let today = new Date();
let christmasYear = today.getFullYear();

if (today.getMonth() == 11 && today.getDate() > 24) {
  christmasYear = christmasYear + 1;
}

let christmasDate = new Date(christmasYear, 11, 24);
let dayMilliseconds = 1000 * 60 * 60 * 24;

let remainingDays = Math.ceil(
  (christmasDate.getTime() - today.getTime()) / dayMilliseconds
);
console.log(remainingDays);
