## 문제

- Lv. Easy
- [290. Word Pattern](https://leetcode.com/problems/word-pattern/submissions/?envType=study-plan-v2&envId=top-interview-150)

## 고민점

- a가 dog이라는 것과 b가 cat이라는 상태를 어떤 형식으로 저장할 것인가?
- 저장된 상태를 어떻게 이용하여 패턴과 매치되는 단어인지 판단할 것인가?

## 1차 풀이

- 각 pattern의 문자열을 객체의 key 값으로 지정해서 저장
- 객체에 저장된 pattern 값인 경우, 해당 pattern에 저장된 값과 s 단어의 값이 같지 않으면 false를 리턴하는 방식으로 풀이
- 하지만 `wordPattern("abba", "dog dog dog dog")`인 경우 true가 반환되서 실패

```js
var wordPattern = function (pattern, s) {
  const strArr = s.split(" ");
  const match = {};

  for (let i = 0; i < pattern.length; i++) {
    if (!match[pattern[i]]) {
      match[pattern[i]] = strArr[i];
    } else {
      if (match[pattern[i]] !== strArr[i]) return false;
    }
  }

  return true;
};
```

## 2차 풀이

- pattern의 길이와 strArr의 길이가 다른 경우에는 early return 하는 조건 추가
- 1차 풀이에서 나왔던 엣지 케이스(서로 다른 pattern 문자에 대한 str[i]의 값이 동일할 때)를 해결하기 위한 방법
  - `Set`을 이용하여 match 객체에서 중복을 제거한 사이즈와, 중복 제거 전 사이즈가 동일하면 true고, 다르면 다른 pattern에 대한 문자가 같다는 뜻이므로 false

```js
var wordPattern = function (pattern, s) {
  const strArr = s.split(" ");
  const match = {};

  if (pattern.length !== strArr.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!match[pattern[i]]) {
      match[pattern[i]] = strArr[i];
    } else {
      if (match[pattern[i]] !== strArr[i]) return false;
    }
  }

  return new Set(Object.values(match)).size === Object.values(match).length;
};
```
