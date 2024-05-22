## 문제

- Lv. Medium
- [151. Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150)

## 풀이

미디엄 레벨이라서 이 방식으로 하면 시간 복잡도 이슈로 실패할 줄 알았으나 성공함.

뎁스를 이루어서 순회하는 것이 아니라, split, filter, reverse, join 함수를 동일 뎁스에서 전체 순회 한 번씩 실행하기 때문에 시간 복잡도가 O(n)이다.

> O(n) + O(n) + O(n) + O(n) = O(n)
>
> 일반 계산식으로는 4O(n)이지만, 시간 복잡도를 나타내는 빅오 표기법에서는 상수 계수를 제거한다.
> 빅오 표기법은 알고리즘의 성능을 나타낼 때, 상수 계수와 낮은 차수의 항을 무시하여 가장 큰 영향을 미치는 요소만을 고려하기 때문

공간 복잡도도 마찬가지로 단계마다 생성된 아이템의 개수가 최대 n개이므로 O(n)이다.

```js
function reverseWords(s: string): string {
  const arr = s
    .split(" ")
    .filter((item) => !!item)
    .reverse();

  return arr.join(" ");
}
```

이 때까지 복잡도에 대해 잘못 이해한 부분이 있었음을 알 수 있었다. 시간 복잡도와 공간 복잡도의 개념에 대해서 좀 더 정확하게 이해하게 되었다.

## 다른 풀이

큰 차이는 없지만 이 풀이가 조금 더 실행 시간이 빠름

```js
function reverseWords(s: string): string {
  const stringAsArray = s.split(" ");
  let result = "";

  for (let i = stringAsArray.length - 1; i >= 0; i--) {
    // reverse
    const word = stringAsArray[i];

    // filter
    if (word) {
      // join
      result += word + " ";
    }
  }

  return result.trim();
}
```
