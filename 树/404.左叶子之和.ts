function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum: number = 0;
  function sumTotal(root: TreeNode | null, isLeft: boolean): number {
    if (root === null) return 0;
    if (root.left) sumTotal(root.left, true);
    if (!root.left && !root.right && isLeft) sum += root.val;
    if (root.right) sumTotal(root.right, false);
    return sum;
  }
  return sumTotal(root, false);
}
