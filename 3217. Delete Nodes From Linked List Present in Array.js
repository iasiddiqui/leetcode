/*
Approach

We first convert nums into a Set for O(1) lookup.
Then, we traverse the linked list using two pointers — prev and curr.
If the current node’s value exists in the Set, we remove it by linking prev.next to curr.next.
Otherwise, move prev forward. Finally, return the modified list’s head.

Time Complexity: O(n + m) → n = number of list nodes, m = nums length.
Space Complexity: O(m) → for the Set storing values to delete.
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    const toDelete = new Set(nums); 
    const dummy = new ListNode(0, head);
    let prev = dummy, curr = head;

    while (curr) {
        if (toDelete.has(curr.val)) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    return dummy.next;
};
