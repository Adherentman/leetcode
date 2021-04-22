function levelOrderBottom(root: TreeNode | null): number[][] {
  let res: number[][] = [];
  if(!root) return res;
  const traverse = (node: TreeNode | null, step: number) => {
    if(node) {
      if(!res[step]) res[step] = [];
      res[step].push(node.val);
      traverse(node.left, step + 1);
      traverse(node.right, step + 1);
    }
  }
  traverse(root, 0);
  return res.reverse();
};