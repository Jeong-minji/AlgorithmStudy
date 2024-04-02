// Lv.Easy

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const checked = [];

  while (n !== 1) {
    if (checked.includes(n)) return false;
    checked.push(n);
    n = n
      .toString()
      .split("")
      .reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
  }

  return true;
};
