## 문제

- Lv.Easy
- [222. Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/?envType=study-plan-v2&envId=top-interview-150)

## 풀이

- 루트 -> 좌노드 -> 우노드 순회하면서 트리의 노드 개수만 구하면 됨
- 재귀 함수 사용하는 로직 중, 피보나치 수열 구하는 로직과 비슷하다고 생각함

  - 피보나치: `return func(n-1) + func(n-2)`

```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0;

  return 1 + countNodes(root.left) + countNodes(root.right); // 1은 시작 root 노드를 포함하기 위함
};
```
