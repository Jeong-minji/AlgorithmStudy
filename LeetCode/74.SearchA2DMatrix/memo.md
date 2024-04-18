#### Lv.Medium

## 문제

- m \* n의 이중 배열에서 주어진 target 값을 찾아야 하는 문제
- 대신 시간복잡도는 `O(log(m*n))`이어야 함

## `O(log(m*n))`

- 데이터 원소가 N개 일 때 알고리즘은 몇 단계가 필요한가?

  `O(log(m*n))`은 데이터 원소가 N개 있을 때 알고리즘에 `log₂` 단계가 걸린다.
  (ex) 원소가 8개면 log₂8 = 3이므로 3단계

- 데이터가 두 배로 증가할 때마다 한 단계씩 늘어남
- 결론: 이진 탐색(Binary Search) 사용

## 이진 탐색

- 데이터가 정렬되어 있는 배열에서 특정한 값을 찾아내는 방법

  -> 문제에서 배열의 값이 이미 정렬되어 있으므로 그대로 진행

- 배열의 중간값을 임의로 선택하여, 찾고자 하는 값이 중간값보다 작으면 왼쪽, 크면 오른쪽을 탐색하는 방법을 반복

## 이진 탐색 코드

```js
const solution = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); // 2
```

## 풀이

- 결국 이차원 배열의 이진 탐색을 구현하는 것
- 이진 탐색 풀이에서 target 값을 찾으면 true를 반환하고, 못찾으면 false를 반환하도록 로직 변경
