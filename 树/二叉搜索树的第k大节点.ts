
function kthLargest(root: TreeNode | null, k: number): number {
  let res: number[] = [];
  const reserve = (root: TreeNode | null) => {
      if(!root) return;
      reserve(root.left);
      res.push(root.val);
      reserve(root.right);
  }
  reserve(root)
  return res[res.length - k];
};