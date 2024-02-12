/**
 1. Given an array of integers nums, return the number of good pairs. A pair (i, j) is called good if nums[i] == nums[j] and i < j.
    Input: nums = [1,2,3,1,1,3]
    Output: 4
    Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

    Input: nums = [1,1,1,1]
    Output: 6
    Explanation: Each pair in the array are good.

    Input: nums = [1,2,3]
    Output: 0 */

// const findNumberOfGoodPairs = (nums) => {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

// console.log(findNumberOfGoodPairs([1, 2, 3]));

// 2. Given a number, write a function to calculate the sum of the digits.
//     arr = 123
//     output = 6; 1 + 2 + 3 = 6

const calculateSumOfDigits = (num) => {
  const digits = Array.from(num.toString(), (item) => parseInt(item));
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum = sum + digits[i];
  }
  return sum;
};

console.log(calculateSumOfDigits(4089));

// 3. Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Assume only one will appear once.

// nums = [2,2,1]
// output: 1

// nums = [4,1,2,1,2]
// Output: 4

// nums = [1]
// Output: 1

// const findSingleDigitsInArray = (nums) => {
//   let sortedNums = nums.sort();
//   for (let i = 0; i < sortedNums.length; i++) {
//     if (
//       sortedNums[i] !== sortedNums[i + 1] &&
//       sortedNums[i - 1] !== sortedNums[i]
//     ) {
//       return sortedNums[i];
//     }
//   }
// };

// console.log(findSingleDigitsInArray([2, 2, 1]));

// 4. Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

//     Input: nums1 = [1,2,2,1], nums2 = [2,2]
//     Output: [2]

//     Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//     Output: [9,4]
//     Explanation: [4,9] is also accepted.
//  */

// const findIntersectionOfTwoArrays = (nums1, nums2) => {
//   let intersectedNums = [];

//   for (let i = 0; i < nums1.length; i++) {
//     if (nums2.includes(nums1[i])) {
//       //     if (intersectedNums.indexOf(nums1[i] === -1)) {
//       //   intersectedNums.push(nums1[i]);
//       //     }

//       intersectedNums.push(nums1[i]);
//     }
//   }
//   const uniqueIntersectedNums = intersectedNums.reduce(
//     (accumulator, currentValue) => {
//       if (accumulator.indexOf(currentValue) === -1) {
//         accumulator.push(currentValue);
//       }
//       return accumulator;
//     },
//     []
//   );

//   return uniqueIntersectedNums;
// };

// console.log(findIntersectionOfTwoArrays([1, 2, 2, 1], [2, 2]));
