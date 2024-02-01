var twoSum = function (nums, target) {
  let newObj = {};

  for (i = 0; i < nums.length; i++) {
    let remaining = target - nums[i];

    if (newObj[remaining] !== undefined) {
      return [newObj[remaining], i];
    }

    newObj[nums[i]] = i;
  }
};
