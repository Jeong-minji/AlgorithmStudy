const solution = (nums) => {
  const { length } = nums;
  let result = Array.from({ length }, () => 1);

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    nums[i] = nums[i] * nums[i + 1];
  }

  for (let i = 0; i < nums.length - 1; i++) {
    result[i] = result[i] * nums[i + 1];
  }

  return result;
};
