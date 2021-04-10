class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if(nums.length == 0) return null;
  return buildTree(nums, 0, nums.length - 1);
};

function buildTree(nums: number[], left: number, right: number) {
  if(left > right) return null;
  let mid = left + Math.ceil((right - left) / 2);
  
  let current = new TreeNode(nums[mid]);
  current.left = buildTree(nums, left, mid -1);
  current.right =  buildTree(nums, mid + 1, right);
  
  return current;
}