/*
Approach: Recursive Mirror Check

Compare the left and right subtrees recursively —

Both null → symmetric.

One null → not symmetric.

Values must match, and outer-inner children must mirror.

Time Complexity: O(n) — each node visited once.
Space Complexity: O(h) — recursion stack (h = tree height).
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
   
    if (!root) return true;
    
    const isMirror = (t1, t2) => {
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;
        return (t1.val === t2.val) && 
               isMirror(t1.left, t2.right) && 
               isMirror(t1.right, t2.left);
    };
    
    return isMirror(root.left, root.right);
};
