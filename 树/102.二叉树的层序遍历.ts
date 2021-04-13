function levelOrder(root: TreeNode | null): number[][] {
  if(!root) return [];
  let resultArr: number[][] = [];
  const traverse = (root: TreeNode | null, step: number) => {
    if(root) {
      if(!resultArr[step]) resultArr[step] = [];
      resultArr[step].push(root.val);
      traverse(root.left, step + 1);
      traverse(root.right, step + 1);
    }
  }
  traverse(root, 0);
  return resultArr
};