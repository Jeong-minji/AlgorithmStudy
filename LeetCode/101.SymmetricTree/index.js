/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return checkIsMirror(root.left, root.right);
};

const checkIsMirror = (left, right) => {
  if (!left && !right) return true;

  if ((!left && right) || (left && !right)) return false;

  if (left.val === right.val)
    return (
      checkIsMirror(left.left, right.right) &&
      checkIsMirror(left.right, right.left)
    );

  return false;
};
