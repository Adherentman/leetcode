function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) return [];

  let resultArr: number[][] = [];
  const traverse = (root: TreeNode | null, step: number) => {
    if (root) {
      if (!resultArr[step]) resultArr[step] = [];
      resultArr[step].push(root.val);
      traverse(root.left, step + 1);
      traverse(root.right, step + 1);
    }
  };
  traverse(root, 0);
  let res = [];
  for (let i of resultArr) {
    let count = 0;
    if (i.length > 0) {
      for (let j of i) {
        count += j;
      }
      res.push(count / i.length);
    }
  }
  return res;
}
