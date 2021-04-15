
function binaryTreePaths(root: TreeNode | null): string[] {
  const paths: string[] = [];
   const construct_paths = (root: TreeNode | null, path: string) => {
       if (root) {
           path += root.val.toString();
           if (root.left === null && root.right === null) { // 当前节点是叶子节点
               paths.push(path); // 把路径加入到答案中
           } else {
               path += "->"; // 当前节点不是叶子节点，继续递归遍历
               construct_paths(root.left, path);
               construct_paths(root.right, path);
           }
       }
   }
   construct_paths(root, "");
   return paths;
};