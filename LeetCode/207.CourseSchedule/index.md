## 문제

- Lv. Medium
- [207. Course Schedule](https://leetcode.com/problems/course-schedule/?envType=study-plan-v2&envId=top-interview-150)

## Topological Sort(위상정렬) 개념

- 순서가 정해져 있는 작업을 차례대로 수행해야 할 때, 그 순서를 결정하기 위해 사용하는 알고리즘
- 사이클이 없는 방향 그래프의 모든 노드를 **'방향에 거스르지 않게 순서대로 나열하는 것'**
- 그래프의 흐름 = 조건

### 진입차수와 진출차수

- 진입차수(Indegree): 특정한 노드로 들어오는 간선의 개수
- 진출차수(Outdegree): 특정한 노드에서 나가는 간선의 개수

### 동작 과정

- 진입차수가 0인 노드를 큐에 넣는다.
- 큐가 빌때까지 아래 과정을 반복한다.
  - 큐애서 원소를 꺼내 해당 노드에서 나가는 간선을 그래프에서 제거
  - 새롭게 진입차수가 0이 된 노드를 큐에 삽입
- 최종적으로 `각 노드가 큐에 들어온 순서가 위상 정렬의 결과`

## 풀이

- 그래프 표현: 각 코스를 노드로, 코스를 듣기 위한 선행 조건을 간선으로하여 그래프 생성
- 각 과목이 몇 개의 선행 조건을 거쳐야 하는지 담은 배열을 생성 -> 바로 시작할 수 있는 과목(prerequisite가 0인 과목) 찾기
- 큐를 이용하여 Topological Sort
  - Prerequisite가 0인 과목들을 큐에 넣음
  - 큐에서 과목을 하나씩 꺼내면서, 해당 과목의 선행 조건을 1씩 감소
  - Prerequisite가 0인 과목들을 다시 큐에 추가
  - 모든 과목이 큐에서 제거되어 queue.length === 0이 되면 모든 과정 완료 가능, 그렇지 않다면 완료 불가

## 코드

```js
const canFinish = (numCourses, prerequisites) => {
  // 그래프 생성
  const graph = Array.from({ length: numCourses }, () => []);
  const inDegree = Array(numCourses).fill(0);

  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    inDegree[course]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  // 큐에서 과목을 하나씩 꺼내면서 위상 정렬 수행
  let visitedCourses = 0;
  while (queue.length > 0) {
    const course = queue.shift();
    visitedCourses++;

    for (const nextCourse of graph[course]) {
      inDegree[nextCourse]--;
      if (inDegree[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }

  return visitedCourses === numCourses;
};
```
