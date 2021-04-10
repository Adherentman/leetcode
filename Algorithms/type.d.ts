
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }
type Maybe<T> = T | null

interface TreeNode {
    val: number;
    left: Maybe<TreeNode>;
    right: Maybe<TreeNode>
}
interface Node {
    val: number;
    children: Node[]
}