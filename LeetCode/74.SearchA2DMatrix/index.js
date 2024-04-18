/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    const firstIndex = Math.floor(mid / cols); // 값이 몇 째 줄에 있는지
    const secondIndex = Math.floor(mid % cols); // 값이 해당 줄에서 몇 번째에 있는지
    const currentValue = matrix[firstIndex][secondIndex];

    if (currentValue === target) {
      return true;
    } else if (currentValue > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
