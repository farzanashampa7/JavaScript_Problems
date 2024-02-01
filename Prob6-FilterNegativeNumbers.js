const filterNegativeNumbers = (array) => {
  let sortedArray = array.filter((item) => item >= 0);
  return sortedArray;
};

console.log(filterNegativeNumbers([-1, 2, 9, -40, 48, 3, 5, -6, 8]));
