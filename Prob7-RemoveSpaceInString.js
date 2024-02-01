const removeSpace = (str) => {
  let newStr = str
    .split('')
    .filter((item) => item !== ' ')
    .join('');
  return newStr;

  //     str.replace(/\s/g, '');
  //   return newStr;
};

console.log(removeSpace('Shamp a '));
