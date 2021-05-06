
function inorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = [];
  if(!root) return res;
  const traverse = (root: TreeNode | null) => {
    if(root) {
      traverse(root.left);
      res.push(root.val);
      traverse(root.right);
    }
  }
  traverse(root);
  return res;
};