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

 function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  let result:number[][] = [];
   const recursion = (root:TreeNode | null,path:number[],treeSum:number) =>{
     if(!root) return;
     path.push(root.val);
     treeSum+= root.val;
     //深度优先遍历
     recursion(root.left,path,treeSum);
     recursion(root.right,path,treeSum);
     if(!root.left && !root.right && treeSum === targetSum){
        result.push(path.slice());
     }
    //回溯
     path.pop(); 
   }
   recursion(root,[],0);
   return result;
};