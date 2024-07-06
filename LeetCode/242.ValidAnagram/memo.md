## 문제

- Lv. Easy
- [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/submissions/?envType=study-plan-v2&envId=top-interview-150)

## 1차 풀이

- s를 한 글자씩 순회하면서, t에서 동일한 글자 나올때 마다 차례대로 지우고, 다 지워지지 않은 경우 false 리턴하는 방식으로 풀이
- 시간복잡도와 공간복잡도가 너무 크게 나와서 다시 풀었음
  - 아마 findIndex, splice 등 함수 너무 많이 사용해서 그런게 아닐까 예상

```js
var isAnagram = function (s, t) {
  const tArr = t.split("");
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    const findedIndex = tArr.findIndex((item) => item === s[i]);
    if (findedIndex > -1) tArr.splice(findedIndex, 1);
  }

  return tArr.length === 0;
};
```

## 2차 풀이

- 함수 사용 X
- s를 순회하면서 charCount 객체에 각 문자의 개수를 직접 세어서 저장
- 다시 t를 순회하면서, t에 존재하는 문자의 개수를 하나씩 빼면서, 모든 객체의 값이 0인 경우에 true 반환하는 방식
- 시간복잡도와 공간복잡도 최적화 됨

```js
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const charCount = {};

  for (let char of s) {
    if (charCount[char]) charCount[char] += 1;
    else charCount[char] = 1;
  }

  for (let char of t) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
};
```
