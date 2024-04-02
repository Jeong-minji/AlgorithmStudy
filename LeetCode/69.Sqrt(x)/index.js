// Lv.Easy

var mySqrt = function (x) {
  let approx = 1;

  while (approx ** 2 !== x) {
    if (Number((approx * approx).toFixed(2)) === x) {
      break;
    }
    approx = (approx + x / approx) / 2;
  }

  return Math.floor(approx);
};
