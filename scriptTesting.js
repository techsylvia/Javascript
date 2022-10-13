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
