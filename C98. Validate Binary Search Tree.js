/*
Approach

We use recursive validation with range limits.
For each node, we ensure its value lies strictly between a min and max boundary.

Initially, the range is (-∞, +∞).

When moving to the left child, update max to the current node’s value.

When moving to the right child, update min to the current node’s value.
If all nodes follow the BST property, return true.

Time Complexity: O(n) — each node is visited once.
Space Complexity: O(h) — recursion stack height (O(log n) for balanced trees, O(n) for skewed).
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
var isValidBST = function(root) {
    const validate = (node, min, max) => {
        if (!node) return true;
        if (node.val <= min || node.val >= max) return false;
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    };
    return validate(root, -Infinity, Infinity);
};
