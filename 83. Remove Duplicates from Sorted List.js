/*
Approach: Single Pointer Traversal

We iterate through the linked list using a single pointer (current).
If the next node has the same value, we skip it by updating current.next.
Otherwise, we simply move the pointer forward. This removes duplicates in-place without extra space.

Time Complexity: O(n) — traverse each node once.
Space Complexity: O(1) — in-place modification.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next; // skip duplicate
        } else {
            current = current.next; // move to next node
        }
    }
    return head;
};
