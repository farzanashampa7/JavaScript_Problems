var lengthOfLongestSubstring = function (s) {
  let currentStr = [];
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    let currentCharacterPosition = currentStr.indexOf(s[i]);

    if (currentCharacterPosition !== -1) {
      currentStr.splice(0, currentCharacterPosition + 1);
    }

    currentStr.push(s[i]);

    maxLength = Math.max(maxLength, currentStr.length);
  }

  return maxLength;
};
