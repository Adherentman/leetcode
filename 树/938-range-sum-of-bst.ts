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
 function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let sum = 0
  const traverse = (node: TreeNode | null) => {
      if (!node) return
      if (node.val >= low && node.val <= high) {
          sum += node.val
      }
      traverse(node.left)
      traverse(node.right)
  }
  traverse(root)
  return sum
}