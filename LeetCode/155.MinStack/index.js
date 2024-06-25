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
