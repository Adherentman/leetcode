function preorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = []
  if(!root) return res;
  const traverse = (root: TreeNode|null) => {
    if(root) {
      res.push(root.val);
      traverse(root.left);
      traverse(root.right);
    }
  };
  traverse(root);
  return res
};