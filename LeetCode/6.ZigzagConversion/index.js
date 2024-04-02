// Lv.Easy

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let arr = [];
  let front = 0;
  let back = 0;
  let unit = 1;

  // 지그재그 만들기 불가능하면 리턴
  if (numRows === 1 || s.length < numRows) return s;

  for (let i = 0; i < s.length; i++) {
    if (!arr[i]) arr.push([]);

    arr[front][back] = s[i];

    if (front === numRows - 1) unit = -1;
    if (front === 0) unit = 1;

    front += 1 * unit;
    if (unit !== 1) back += -1 * unit;
  }

  let result = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j]) result += arr[i][j];
    }
  }

  return result;
};
