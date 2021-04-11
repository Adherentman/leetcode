function increasingBST(root: TreeNode | null): TreeNode | null {
  let tree = new TreeNode();
  let pre = tree;
  const traverse = (root: TreeNode | null) => {
      if(!root) return;
      traverse(root.left);
      root.left = null;
      pre.right = root;
      pre = root;
      traverse(root.right);
      return
  }
  traverse(root)
  return tree.right
};