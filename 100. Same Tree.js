/*
Recursive Comparison

We recursively compare both trees:

If both nodes are null, they’re identical.

If only one is null, they differ.

If values differ, return false.

Otherwise, compare left and right children recursively.

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true;          
    if (!p || !q) return false;         
    if (p.val !== q.val) return false;  

   
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

