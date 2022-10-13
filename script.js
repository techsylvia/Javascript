const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// It's a good idea to use a function to calculate the average
const calcTempAmplitude = function (temps) {
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
calcTempAmplitude([3, 7, 4, 1, 8]);
calcTempAmplitude(temperatures);

//Problme two
// function should now recieve two arrays of temperatures
// 1) understand the probnlem
// - with 2 arrays, should we implemenet functionality twice? no! just merge two arrays
// 2) breaking up into sub-problems
// how to merge two arrays?
//

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // c) fix
    // value: Number(prompt("Degrees celsius:")),
  };
  // find
  console.log(measurement.value);

  //console.log(measurement.value);
  // console.warn(measurement.value);
  //console.error(measurement.value);

  const Kelvin = measurement.value + 273;
  return Kelvin;
};

console.log(measureKelvin());

// using a debugger

const calcTempAmplitudeBug = function (t1, t2) {
  // sub problem merging two arrays
  //const array1 = ["a", "b", "c"];
  //const array2 = ["d", "e", "f"];
  //const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;
    w;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// identify the bug
console.log(amplitudeBug);
