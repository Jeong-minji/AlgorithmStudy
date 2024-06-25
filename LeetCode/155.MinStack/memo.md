## 문제

- Lv.Medium
- [155. Min Stack](https://leetcode.com/problems/min-stack/description/?envType=study-plan-v2&envId=top-interview-150)

## 1차 풀이

- 의도대로 작동은 하지만, input이 많을 경우 overflow 발생
- 원인: `pop()`에서 사용한 `Math.min()` 함수 때문에 시간복잡도 O(1)에 어긋나서로 보임
- 해결 방법
  - `pop()` 하는 요소가 현재 min 값인 경우에 min 값을 stack에 존재했던 그 다음 min 값으로 대체 해주어야 함
  - 그 다음 min 값을 `Math.min()`을 사용하지 않고 구하려면, min을 단일값이 아닌 array로 만들어서 push 당시 min이었던 값들을 순서대로 저장해두고, 마지막 값을 사용해야 할 듯

```js
var MinStack = function () {
  this.stack = [];
  this.min = null;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (!this.min) this.min = val;
  if (val < this.min) this.min = val;
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const popValue = this.stack.pop();
  if (popValue === this.min) this.min = Math.min(...this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};
```

## 2차 풀이

```js
var MinStack = function () {
  this.stack = [];
  this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.min.length === 0 || val <= this.min[this.min.length - 1]) {
    this.min.push(val);
  }
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const poppedValue = this.stack.pop();

  if (poppedValue === this.min[this.min.length - 1]) this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.length ? this.stack[this.stack.length - 1] : 0;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min.length ? this.min[this.min.length - 1] : 0;
};
```
