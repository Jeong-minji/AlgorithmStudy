## 문제

- Lv. Medium
- [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-interview-150)

## 1차 접근

- 전체 strs 배열에 있는 단어들이 가지고 있는 철자들만 골라내기

  (ex) ["abcd", "cat", "dac"] -> ["a", "b", "c", "d", "t"]

- strs 배열에 있는 각 단어들을 위에서 추출한 철자들의 index의 합으로 나타내기

  (ex) cat -> 2 + 0 + 4 = 6

- 단어들의 조합이 같은 단어끼리 묶는거니까, 철자들의 합이 동일한 단어끼리 묶어서 return 하기

  - 하지만 단어 조합이 달라도 합이 동일한 경우가 생겨서 실패

    (ex) ["ac", "c"] -> [ 1, 1 ]이라서 `[["c"],["ac"]]`가 나와야 하는데 `[[ 'ac', 'c' ]]`가 나옴

```js
var groupAnagrams = function (strs) {
  const fullStr = [...new Set(strs.join(""))];
  let sumStr = [];
  let result = [];

  for (let i = 0; i < strs.length; i++) {
    let sum = 0;
    if (strs[i].length === 0) {
      sum -= 1;
    } else {
      for (let j = 0; j < strs[i].length; j++) {
        sum += fullStr.findIndex((c) => c === strs[i][j]);
      }
    }
    sumStr[i] = sum;
  }

  const map = new Map();

  sumStr.forEach((value, index) => {
    if (map.has(value)) {
      map.get(value).push(strs[index]);
    } else {
      map.set(value, [strs[index]]);
    }
  });

  return Array.from(map.values());
};
```

## 2차 접근

- strs에 들어있는 각 단어를 sort -> anagram의 단어들은 sort 하면 동일해짐
- sort한 단어를 key값으로 해서 동일한 key값을 가지는 단어들을 객체에 저장
- 객체를 2차원 배열로 반환해서 리턴
- 엣지케이스 없이 정답은 잘 나오나 Time Limit Exceed 발생
  - sort 코드때문에 시간복잡도가 `O(n⋅mlogm)`이 나옴
  - sort 로직을바꿔서 시간복잡도를 줄여아 할 것으로 예상

```js
const groupAnagrams = (strs) => {
  const pair = {};
  let result = [];

  for (let i = 0; i < strs.length; i++) {
    const keyWord = strs[i].split("").sort().join("");

    if (pair[keyWord]) pair[keyWord] = [...pair[keyWord], strs[i]];
    else pair[keyWord] = [strs[i]];
  }

  for (let i = 0; i < Object.keys(pair).length; i++) {
    result.push(pair[Object.keys(pair)[i]]);
  }

  return result;
};
```

## 최종 풀이

- 정렬 로직을 실행하는 `generateKey(str)`는 시간복잡도 `O(n⋅m)`을 가짐
- 최종적으로 `O(n⋅mlogm)` -> `O(n⋅m)`으로 최적화하여 패스

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const pair = {};
  let result = [];

  const generateKey = (str) => {
    const count = new Array(26).fill(0);
    const base = "a".charCodeAt(0);

    for (let i = 0; i < str.length; i++) {
      count[str.charCodeAt(i) - base]++;
    }

    return count.join("#");
  };

  for (let i = 0; i < strs.length; i++) {
    const keyWord = generateKey(strs[i]);
    pair[keyWord] ? pair[keyWord].push(strs[i]) : (pair[keyWord] = [strs[i]]);
  }

  for (const key in pair) {
    result.push(pair[key]);
  }

  return result;
};
```
