// Lv.Easy

const plusOne = function (digits) {
  const integer = BigInt(digits.join(""));
  const increasedInteger = String(integer + 1n);
  const result = increasedInteger.split("");

  return result;
};
