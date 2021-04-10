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

 function traverse(root: TreeNode | null): number {
  if(root == null) return 0;
  let left = traverse(root.left) + 1;
  let right = traverse(root.right) + 1;
  
  let diff = Math.abs(left - right);
  if (diff > 1) return Infinity;
  
  return Math.max(left, right);
}

function isBalanced(root: TreeNode | null): boolean {
  return traverse(root) == Infinity ? false : true;
};
