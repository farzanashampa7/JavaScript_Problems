const calculateSum = (arr) => {
  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sum;
};

console.log(calculateSum([1, 3, -67, 8, 34, 23]));
