function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root == null || val == root.val) return root;
  return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val)
};