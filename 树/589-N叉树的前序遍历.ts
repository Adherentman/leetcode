function preorder(root: Node | null): number[] {
  let num: number[] = [];
  if(!root) return [];
  const traverse = (root: Node) => {
      num.push(root.val);
      for(let i of root.children) {
        traverse(i)
      }
  }
  traverse(root);
  return num;
};