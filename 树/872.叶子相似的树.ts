function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  let res1: number[] = [];
  let res2: number[] = [];

  const traverse = (tree: TreeNode | null, res: number[]) => {
    if(tree) {
      if(tree.left == null && tree.right == null) {
        res.push(tree.val);
      } else {
        traverse(tree.left, res);
        traverse(tree.right, res);
      }
    }
  };
  traverse(root1, res1);
  traverse(root2, res2);
  return JSON.stringify(res1) == JSON.stringify(res2);
};