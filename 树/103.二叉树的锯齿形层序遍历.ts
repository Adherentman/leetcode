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

 function zigzagLevelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = [];
  if(!root) return res;

  const traverse = (root: TreeNode | null, step: number) => {
    if(root) {
      if(!res[step]) res[step] = [];
      if(step % 2 == 0) {
        res[step].push(root.val);
      } else {
        res[step].unshift(root.val);
      }
      traverse(root.left, step + 1);
      traverse(root.right, step + 1);
    }
  }
  traverse(root, 0);
  return res;
};