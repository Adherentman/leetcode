/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

 function postorder(root: Node | null): number[] {
  if(!root) return [];
  let result: number[] = [];
  function houxu (root: any) {
      if (root.children) {
          root.children.map((child: any) => houxu(child))
      }
      result.push(root.val)
      return result
  }
  houxu(root)
  return result;
};