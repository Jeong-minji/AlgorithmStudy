## 문제

- Lv. Easy
- [637. Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150)

## 풀이

- 동일 레벨에 있는 노드들의 평균값을 구하는 것 -> 검색 키워드를 `Level Order Traversal`로 잡고 검색
- [Level Order Traversal 원리를 잘 설명해둔 글](https://chanhuiseok.github.io/posts/ds-2/) 참고하여 풀이

  - 큐에 루트값 저장
  - 해당 루트값을 dequeue하면서, 해당 루트의 left와 right를 queue에 추가
  - queue에 있는 left 값을 dequeue 하면서, 그 left의 left와 right를 queue에 추가
  - 이런 방식을 반복하면 큐에 동일한 레벨의 노드들이 모아져 있게 되고, 이 때 평균값 게산에서 배열에 추가
