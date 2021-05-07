/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function minDepth(root: TreeNode | null): number {
  if (root == null) return 0;
  let m1 = minDepth(root.left);
  let m2 = minDepth(root.right);
  //1.如果左孩子和右孩子有为空的情况，直接返回m1+m2+1
  //2.如果都不为空，返回较小深度+1
  return root.left == null || root.right == null
    ? m1 + m2 + 1
    : Math.min(m1, m2) + 1;
}
