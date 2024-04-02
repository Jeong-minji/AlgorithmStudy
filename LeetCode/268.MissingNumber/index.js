// Lv.Easy

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let maxNumber = Math.max(...nums);

  for (let i = 0; i <= maxNumber; i++) {
    if (!nums.includes(i)) return i;
  }

  return maxNumber + 1;
};
