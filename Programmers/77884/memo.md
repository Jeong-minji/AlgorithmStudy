## 풀이

- left ~ right까지 for문으로 순회하며, 1부터 해당 숫자 까지 사이 숫자 중 나누어 떨어지는 숫자가 있으면 divisorCount(약수의 개수) 증가
- 약수 개수가 홀수인 숫자는 result에서 뺄셈, 짝수인 숫자는 result에서 덧셈

## 코드

```js
function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    let divisorCount = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) divisorCount++;
    }

    divisorCount % 2 === 0 ? (result += i) : (result -= i);
  }

  return result;
}
```

![](1st_performance.png)

## 2차 성능 개선

중첩 for문에서 j를 i까지 반복하지 않고 제곱근 이하까지만 반복하여 반복 횟수 감소

j의 값이 i의 제곱근 값과 동일하다면 본인의 제곱이므로 divisorCount는 1만 증가하고, 나머지 경우는 나눠떨어지는 경우 짝이 있기 때문에 2 증가

```js
function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    let divisorCount = 0;

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        j === Math.sqrt(i) ? (divisorCount += 1) : (divisorCount += 2);
      }
    }

    divisorCount % 2 === 0 ? (result += i) : (result -= i);
  }

  return result;
}
```

![실행 시간 및 메모리 감소](2nd_performance.png)

## 다른 사람 풀이

> Math.sqrt() 즉 숫자의 제곱근 값이 정수이면, 해당 숫자의 약수 개수는 홀수라는 점을 이용한 풀이

제곱근 값 본인에 제곱하면 해당 숫자이므로, 약수 개수가 홀수가 될 수 밖에 없음

(ex) Math.sqrt(25) = 5 → [ 1, 5, 25 ]
Math.sqrt(24) = 4.89….. → [ 1, 2, 3, 4, 6, 8, 12, 24 ]

```js
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
```

![실행시간 대폭 감소, 메모리는 비슷](other_performance.png)
