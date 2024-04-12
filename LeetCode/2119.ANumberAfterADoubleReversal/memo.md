### Lv: Easy

## 풀이

- 문제에서 설명한 것과 동일한 방법의 직관적으로 풀이
- num을 reverse를 이용하여 뒤집은 후, 다시 숫자로 바꾸어 최초의 num과 동일한지 비교

```js
function isSameAfterReversals(num) {
  const reversed1 = Number(String(num).split("").reverse().join(""));
  const reversed2 = Number(String(reversed1).split("").reverse().join(""));

  return reversed2 === num;
}
```

## 다른 풀이

- num을 10으로 나누었을 때 나누어 떨어지면, 뒤집었을 때 0이 사라지면서 자릿수가 바뀌므로 동일하지 않다는 원리로 풀이
- 성능상 큰 차이는 없음

```js
function isSameAfterReversals(num) {
  if (num % 10 === 0 && num !== 0) {
    return false;
  } else {
    return true;
  }
}
```
