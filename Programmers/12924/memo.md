## 풀이

- 1차
  - 이중 for문을 사용해서, 바깥 for문은 시작 숫자이고 안쪽 for문은 시작점 부터 연속된 숫자를 더해가며 sum이 n과 같아질 때 break하고 결과값에 1을 더하는 형식
- 2차
  - `주어진 자연수를 연속되는 자연수들의 합으로 표현할 수 있는 방법의 수는 주어진 자연수의 약수 중에서 홀수인 수의 개수와 같다.` 는 원리를 사용하면 쉬운 방법으로 정답을 구할 수 있음

## 코드

- 1차 풀이: 정확도 100, 효율성 0

```js
function solution(n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i + 1; j < n; j++) {
      sum += j;
      if (sum === n) {
        result++;
        break;
      }
    }
  }
  return result;
}
```

- 2차 풀이: 정확도 100, 효율성 100

```js
function solution(n) {
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) cnt++;
  }

  return cnt;
}
```
