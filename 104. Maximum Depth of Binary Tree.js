/*
Approach: Recursive Depth Calculation

We recursively find the depth of the left and right subtrees.
For each node, the maximum depth is 1 + max(leftDepth, rightDepth).
The base case occurs when root is null, returning 0.

Time Complexity: O(n) — each node visited once.
Space Complexity: O(h) — recursion stack, where h is the height of the tree.
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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
