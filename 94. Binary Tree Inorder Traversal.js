/*
Approach: Iterative Inorder Traversal (Using Stack)

Instead of recursion, we use a stack to simulate the call stack.

Traverse left subtree by pushing nodes into the stack.

When leftmost node is reached, pop from the stack, record the value, and move to the right subtree.

Continue until both stack is empty and current node is null.

Time Complexity: O(n) — each node is visited once.
Space Complexity: O(n) — stack stores up to n nodes in worst case.
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let curr = root;

    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }

    return result;
};
