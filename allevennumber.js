function printEvenNumbers(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

function getNumbers(from, to) {
  const result = [];
  for (let i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
}
const result = getNumbers(7, 18);

printEvenNumbers(result);
