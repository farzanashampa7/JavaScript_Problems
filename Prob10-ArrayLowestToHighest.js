const sortArrayLowestToHighest = (arr) => {
  let sortedArray = [];
  let minValue = 0;

  for (let item of arr) {
    if (item > minValue) {
      sortedArray.push(item);
      minValue === item;
    }
  }
  return sortedArray;
};

console.log(sortArrayLowestToHighest([1, 4, 6, 88, 34, 50, 2, 5, 100, 357]));
