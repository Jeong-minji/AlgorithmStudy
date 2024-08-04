## 문제

- Lv. Medium
- [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/description/?envType=study-plan-v2&envId=top-interview-150)

## 그래프란?

- 노드와 노드를 연결하는 간선으로 이루어진 자료구조로, 연결되어 있는 노드 간의 관계를 파악하기 위해 사용
- 트리와의 차이점은 루트 노드가 없으며, 부모와 자식 관계가 존재하지 않는다는 것
- 계층 모델이 아닌 네트워크 모델로 순환 또는 비순환, 방향이 있는 그래프와 없는 그래프가 존재

## BFS와 DFS

- BFS(너비 우선 탐색)
  - 시작 노드를 기준으로 인접한 노드부터 탐색하고, 그 다음에 멀리 있는 노드를 탐색하는 방법
  - 최단 경로, 최소 비용, **상태 공간(퍼즐, 스도쿠 등)에서 최소 이동/변경 횟수 찾을 때** 유리
  - 주로 Queue 사용하여 구현
- DFS(깊이 우선 탐색)
  - 시작 노드에서 출발해서 한 방향으로 갈 수 있을 때까지 계속 내려가다가, 더 이상 갈 수 없게 되면 뒤로 돌아와서 다른 경로를 탐색하는 방법
  - 모든 경로를 탐색하는 케이스, 즉 해결책의 수가 많은 경우 사용
  - 재귀 또는 Stack 사용하여 구현

## 풀이

- 네 방면이 X로 둘러쌓인 O를 X로 변환하는 문제. 따라서 보더에 존재하는 O는 X로 변경될 수 없고, 내부에 있는 O중 보더에 있는 O와 연결되지 않으면 변환 가능
- 위에서 공부한 개념에 따라 `m * n` 형태를 가지는 해당 문제는 BFS로 푸는 것이 적절할 것 같다고 생각함
- BFS 함수
  - queue는 방문할 좌표를 저장한 배열
  - while문은 큐의 맨 앞 좌표를 꺼내서 해당 좌표의 앞,뒤,양옆을 탐색
  - 각 방향으로 이동한 좌표가 O이면 해당 위치를 큐에 저장하고 방문 표시를 저장
- 보드의 모든 가장자리에서 'O'를 탐색. O가 발견되면, bfs를 호출하여 그 위치에서 시작해 연결된 모든 O를 탐색
- 보더와 연결되지 않은 O를 X로 변환한 후에, 완전히 둘러싸인 영역만을 X로 변환

## 코드

```
const solve = (board) => {
  if (board.length === 0 || board[0].length === 0) return;

  const rows = board.length;
  const cols = board[0].length;
  const directions = [
    [1, 0], // 상
    [-1, 0], // 하
    [0, 1], // 좌
    [0, -1] // 우
  ];

  const bfs = (row, col) => {
    const queue = [[row, col]];
    board[row][col] = '-';

    while (queue.length > 0) {
      const [currRow, currCol] = queue.shift();

      for (const [dRow, dCol] of directions) {
        const newRow = currRow + dRow;
        const newCol = currCol + dCol;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          board[newRow][newCol] === 'O'
        ) {
          board[newRow][newCol] = '-';
          queue.push([newRow, newCol]);
        }
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    if (board[i][0] === 'O') bfs(i, 0);
    if (board[i][cols - 1] === 'O') bfs(i, cols - 1);
  }

  for (let j = 0; j < cols; j++) {
    if (board[0][j] === 'O') bfs(0, j);
    if (board[rows - 1][j] === 'O') bfs(rows - 1, j);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === '-') {
        board[i][j] = 'O';
      }
    }
  }

  return board
}
```
