function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // 都为空的话，显然相同
    if(p == null && q == null) return true;
    // 一个为空，一个非空，显然不同
    if(p == null || q == null) return false;
    // 两个都非空，但 val 不一样也不行
    if(p.val != q.val) return false;

    // root1 和 root2 该比的都比完了
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

