## 문제

- Lv. Hard
- [135. Candy](https://leetcode.com/problems/candy/description/?envType=study-plan-v2&envId=top-interview-150)

## 조건

- 일단 점수 제일 낮은 사람 1개부터 시작
- 나를 기준으로 양 옆이 나보다 점수가 높은데, 양 옆 두명의 점수가 서로 다르다 하더라도 사탕 개수는 동일할 수 있음
- rating이 더 높은 이웃이 더 많은 캔디를 받아야 함. 포인트는 더 높은 경우에만 많이 받는 것이므로, rating이 동일한 경우에는 그 외 옆 사람들과의 조건에 따라 더 받을 수도, 덜 받을 수도 있음. 즉, rating이 같다고 캔디수가 같은 것이 아님
- greedy 방식으로 풀이

## 1차 풀이

이렇게 풀었다가 `[1,2,87,87,87,2,1]`에서 오답 나와서 조건 찾는다고 헤매다가 결과 봄

양 옆을 고려해야 하기 때문에 for문 2번으로 앞에서부터 한 번, 뒤에서 부터 한 번 훑어야 한다는 방향은 잡아서 풀었으나, 자꾸 엣지 케이스가 나와서 조건이 잘못되었던 것 같다.

```js
var candy = function (ratings) {
  let candies = Array(ratings.length).fill(1);

  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] < ratings[i + 1]) candies[i + 1]++;
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] < ratings[i - 1]) {
      candies[i] = Math.max(candies[i], candies[i - 1]++);
    }
  }

  return candies.reduce((acc, curr) => acc + curr, 0);
};
```
