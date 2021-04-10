function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
  // 不存在就直接返回null
  if(original == null) return null;
  // 原树 和 target 相等的话就返回
  if(original == target) return cloned;
  // 遍历左节点
  let leftTree = getTargetCopy(original.left, cloned.left, target);
  // 如果不为null 就返回
  if(leftTree != null) return leftTree;
  // 开始右节点
  return getTargetCopy(original.right, cloned.right, target);
};