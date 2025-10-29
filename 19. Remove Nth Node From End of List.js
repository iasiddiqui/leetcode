/*
Approach

Use a dummy node to handle edge cases (like removing the head).

Move first pointer n+1 steps ahead.

Move both first and second together until first reaches null.

second.next now points to the node before the one to remove.

Skip the nth node → second.next = second.next.next.

⏱ Complexity

Time Complexity: O(L) — single pass through list.

Space Complexity: O(1) — constant space.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let first = dummy;
    let second = dummy;

    // Move `first` n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // Move both pointers until `first` reaches end
    while (first) {
        first = first.next;
        second = second.next;
    }

    // Remove nth node
    second.next = second.next.next;

    return dummy.next;
};
