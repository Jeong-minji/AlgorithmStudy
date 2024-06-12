## 문제

- Lv. Easy
- [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

## 풀이

- 주어진 tree의 각 root 기준으로 root.left와 root.right를 switch 하는 문제
- 트리 문제는 대부분 각 뎁스마다 동일한 로직을 반복적으로 실행하므로 재귀를 사용함
- 동일한 로직을 그 다음 뎁스에서 실행해야 하는 타이밍에 재귀 함수를 넣어준다고 생각하면 이해가 더 쉬워진다고 생각함

## 로직

- c언어로 배열 정렬 바꿔주기 로직 구현할 때 처럼, temp 변수 사용해서 root.left와 root.right를 바꿔주는 로직 실행
- 예를 들어 depth1에서 switching 로직을 실행했으면, 그 다음에는 depth1의 left와 right를 각 root로 하여 그 아래 노드들에 대해 switching 로직을 또 실행 시켜 주어야 하므로 재귀 함수 실행
