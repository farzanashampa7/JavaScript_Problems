const countVowel = (str) => {
  let vowelCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      vowelCount++;
    }
  }
  return vowelCount;
};

console.log(countVowel('Elephant'));
