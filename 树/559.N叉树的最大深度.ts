function maxDepth(root: Node): number {
  if(!root) return 0;
  if(root.children.length == 0) return 1;
  let depth = [];
  for(let i of root.children) {
      depth.push(maxDepth(i))
  };
  return Math.max(...depth) + 1
};