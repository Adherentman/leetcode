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

 function isSymmetric(root: TreeNode | null): boolean {
  return isMirror(root, root)
};

function isMirror(p: TreeNode | null, q: TreeNode | null): boolean {
   if(p == null && q == null) return true;
   if(p == null || q == null) return false;
   return (p.val == q.val) && isMirror(p.right, q.left) && isMirror(p.left, q.right)
}