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

 function constructFromPrePost(pre: number[], post: number[]): TreeNode | null {
  if(!pre.length) {
    return null
  }
  let root = new TreeNode(pre.shift())
  post.pop()
  if (pre.length) {
    let index = post.indexOf(pre[0])
    root.left = constructFromPrePost(pre.slice(0, index+1), post.slice(0, index+1))
    root.right = constructFromPrePost(pre.slice(index+1), post.slice(index+1))
  }
  return root
};