/*
Approach: Recursive Height Check (Post-Order Traversal)

We recursively calculate the height of each subtree.
If the height difference between left and right exceeds 1, we mark it unbalanced using -1.
This allows early termination for efficiency and ensures balanced height computation.

Time Complexity: O(n) — each node visited once.
Space Complexity: O(h) — recursion stack, where h is tree height.


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
var isBalanced = function(root) {
    const checkHeight = (node) => {
        if (!node) return 0;

        const left = checkHeight(node.left);
        if (left === -1) return -1;

        const right = checkHeight(node.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) return -1;

        return Math.max(left, right) + 1;
    };

    return checkHeight(root) !== -1;
};
