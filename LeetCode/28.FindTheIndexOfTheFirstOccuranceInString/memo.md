## 풀이

- for문으로 자를 문자열의 첫 index 기준으로 순회하며, needle의 길이 만큼 잘라 needle과 같은지 비교.
- 비교하여 동일하면 인덱스 값인 i를 리턴, for문을 다 순회했는데도 없으면 -1을 리턴

## slice 메소드 미사용 코드

haystack를 인덱스 순서대로 순회하다가, haystack의 해당 인덱스 문자와 needle의 첫 번째 문자가 일치하면 needle을 for문 순회 시작.

순회하다가 `needle[ j ]`의 값이 `haystack[ i + j ]`, 즉 haystack의 현재 인덱스 문자로부터 needle의 현재 인덱스까지의 거리(이 부분이 slice 함수를 대체)가 같지 않으면 반복을 빠져나가고, 같으면 j가 needle의 총 인덱스 값과 같을 때 해당 i 인덱스를 반환

```js
const strStr = (haystack, needle) => {
  if (needle === "" || needle === haystack) return 0;
  if (haystack.length < needle.length) return -1;

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (needle[j] !== haystack[i + j]) {
          break;
        } else if (j === needle.length - 1) {
          return i;
        }
      }
    }
  }

  return -1;
};
```
