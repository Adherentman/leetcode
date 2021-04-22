function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) return null
  let head = preorder[0];
  let root = new TreeNode(head);
  const index = inorder.findIndex(item => item === head);
  root.left = buildTree(preorder.slice(1, index+1), inorder.slice(0, index));
  root.right = buildTree(preorder.slice(index+1), inorder.slice(index+1));
  return root;
};