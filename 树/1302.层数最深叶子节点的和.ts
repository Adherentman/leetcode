function deepestLeavesSum(root: TreeNode | null): number {
  if(!root) return 0;
  let max = -1;
  let res = 0;
  const traverse = (root: TreeNode | null, level: number) =>  {
    if (!root) return;
      if(level > max) {
        max = level;
        res = root.val;
      } else if (max == level) {
        res += root.val;
      }
      traverse(root.left, level + 1);
      traverse(root.right, level + 1);
  }
  traverse(root, 0);
  return res
};