## 문제

- Lv. Easy
- [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/description/?envType=study-plan-v2&envId=top-interview-150)

## 풀이

- 풀다가 안되서 정답봤음
- isMirror의 기준: root가 동일하고, root의 left와 right가 반전된 상태여야 함
- 간단하게 풀 수 있을 것이라고 생각했지만 생각보다 로직이 복잡했다. 머릿속에서는 어떻게 풀어야 할지 감이 오는데 구체화 해서 코드로 옮기는게 쉽지 않은 것 같다.

## checkIsMirror 로직

- left 노드와 right 노드가 없으면 root 밖에 없는 것이므로 return true
- left와 right 중, 둘 중 하나만 없어도 반전 상태가 이루어질 수 없으므로 return false.
  양 노드가 반전된 상태인지 판단하려면 양 노드 모두 존재해야함
- 우선 left와 right root 값이 같아야 그 때부터 시작 (if(left.val === right.val))

  - 좌노드.left와 우노드.right, 좌노드.right와 우노드.left 비교해서 둘 다 true인지 확인하여 return
