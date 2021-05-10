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
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (!postorder.length) {
        return null;
    }

    function getTree(list: number[]): TreeNode | null {
        if (!list.length || !postorder.length) {
            return null;
        }
        const nextVal = postorder.pop() as number;
        const nextTree = new TreeNode(nextVal);
        const index = list.indexOf(nextVal);

        nextTree.right = getTree(list.slice(index + 1));
        nextTree.left = getTree(list.slice(0, index));

        return nextTree;
    }


    return getTree(inorder);
};