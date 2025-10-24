/*
Approach: Divide and Conquer (Recursive Midpoint Construction)

We select the middle element of the sorted array as the root to maintain height balance.
Recursively, the left half forms the left subtree, and the right half forms the right subtree.
This ensures a balanced binary search tree with minimal height.

Time Complexity: O(n) — each element processed once.
Space Complexity: O(log n) — recursion stack for balanced tree depth.

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;

    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;
};
