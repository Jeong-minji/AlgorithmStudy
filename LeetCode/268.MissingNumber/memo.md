## 1차 풀이

- nums 배열에서 `Math.max()` 했을 때 나오는 가장 큰 숫자까지 for 문 돌리면서, nums가 해당 숫자 포함하지 않으면 리턴
- for문이 끝날 때 까지 리턴한 값이 없다면 max 값이 nums에 미포함 되었다는 뜻이므로 `Math.max()+1` 값 리턴

## 1차 코드

```js
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

// maxNumber = 3 -> 총 길이 4, 배열 검사시 3 이전까지 2라는 숫자가 없으므로 2 반환

// maxNumber = 1 -> 총 길이 2 -> nums에 들어있는 배열의 길이가 총 길이와 같으므로, 총길이는 +1 되어야 하고, 최대 숫자는 maxNumber+1이 되어야 함
```

![](1st_performance.png)

## 2차 풀이

- Math.max()로 최대값 구할 필요 없이, 배열의 길이가 max 값
- 성능 및 메모리에 큰 변화 없음

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) return i;
  }

  return maxNumber + 1;
};
```

## 다른 풀이

- 등차 수열 공식 사용: 1부터 n까지의 합: `(n x (n + 1)) / 2`
- nums.length, 즉 최대값을 위 공식에 대입하면 0 ~ 최대값까지의 합을 구할 수 있음. 이 값에서 현재 nums에 들어있는 숫자들의 합을 빼면, 빠진 숫자를 구할 수 있음

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = (nums) => {
  return (
    (nums.length * (nums.length + 1)) / 2 - nums.reduce((a, n) => a + n, 0)
  );
};
```
