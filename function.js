// Functions are a piece of code that you can re-use over and over again

//like a variable but with bunch of code

// start with the "function" keyword and than you give it a name

function logger() {
  console.log("my name is");
  // the function body & will be executed when you run the code
}
// calling / running / invoking function

logger();
logger();
logger();

// functions as machines
// parameters
function fruitMixer(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice includes ${apples} apples and ${oranges} oranges.`;
  return juice;
}
// once the function has been executed,
//this code here fruitMixer(5, 0); will be replaced by
//the result of the function
//fruitMixer(5, 0); // these actual values (5,0) are called arguments
// so if we want to use the  value that the function returned
// we need to store it in a variable
const appleJuice = fruitMixer(5, 0);
console.log(appleJuice);
console.log(fruitMixer(5, 0)); //simply logged the result by running it directly

const appleOrangeJuice = fruitMixer(2, 4); // we r defining specific values here
//which are the arguments which will get passed into the function (apples,oranges)
//as these parameters
console.log(appleOrangeJuice);

const num = Number("23");
