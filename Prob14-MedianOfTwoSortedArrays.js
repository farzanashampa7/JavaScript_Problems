var findMedianSortedArrays = function (nums1, nums2) {
  const merged = [];
  merged.push(...nums1, ...nums2);

  let sortedArr = merged.sort((a, b) => a - b);

  const isOdd = sortedArr.length % 2;
  const mid = Math.floor(sortedArr.length / 2);

  return isOdd ? sortedArr[mid] : (sortedArr[mid] + sortedArr[mid - 1]) / 2;
};
