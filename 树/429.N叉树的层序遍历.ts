function levelOrder(root: Node | null): number[][] {
  const res: number[][] = [];
  const traverse = (root: Node | null, level: number) => {
    if(!root) return;
    if(!(res[level])) res[level] = [];
    res[level].push(root.val);
    if(root.children){
      root.children.forEach((x) => traverse(x, level + 1));
    }
  }
  traverse(root, 0);
  return res
};