// 1. How do you concat two arrays? Write a function to concat two arrays.
//     Example: arr1 = [1,2,3,4,5], arr2 = [6,7,8,9,10]

// javascript concat method
const concatTwoArrays = (arr1, arr2) => {
  let newArr = arr1.concat(arr2);
  console.log(newArr);
};
concatTwoArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);

//Pushing an entire array to another arrray using spread operator
const concatingTwoArrays = (arr1, arr2) => {
  arr1.push(...arr2);
  return arr1;
};
console.log(concatingTwoArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

// 2. Write a function to print first 25 fibonacci numbers.
//     https://www.mathsisfun.com/numbers/fibonacci-sequence.html

const createFibonacciSeries = (n) => {
  let fibonacciArr = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacciArr[i] = fibonacciArr[i - 1] + fibonacciArr[i - 2];
  }
  return fibonacciArr;
};

console.log(createFibonacciSeries(10));

// 3. Write a function to print all primes for given value n.
//     Primes numbers are only divisible by 1 and itself.

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const printPrimeNumbers = (num) => {
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};

console.log(printPrimeNumbers(20));

// Write a function to count how many primes numbers are present for a given value n.

const countPrimeNumbers = (num) => {
  let count = 0;
  for (i = 2; i <= num; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
};
console.log(countPrimeNumbers(15));

// 5. Write a function to determine if the given word is palindrome.
//     Palindrome is a word, verse, or sentence (such as "Retter", "racecar")
//     or a number (such as 1881) that reads the same backward or forward
//  */

const isPalindrome = (word) => {
  let len = word.length;

  for (let i = 0; i < len / 2; i++) {
    if (word[i].toLowerCase() !== word[len - i - 1].toLowerCase()) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome('Retter'));
