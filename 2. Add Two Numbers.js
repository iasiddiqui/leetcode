/*
Approach
We use a dummy head node to simplify list construction and maintain a carry to handle sums greater than 9. We traverse both linked lists simultaneously, adding the corresponding node values along with the carry. For each step, we create a new node with the digit (sum % 10) and update the carry as Math.floor(sum / 10). The traversal continues until all nodes and any remaining carry are processed. Finally, we return dummy.next as the resulting linked list.

Time Complexity: O(max(m, n))
Space Complexity: O(max(m, n))
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // fallback factory if ListNode is not available
    const makeNode = (val, next = null) => {
        if (typeof ListNode === 'function') return new ListNode(val, next);
        return { val, next };
    };

    let dummy = makeNode(0);
    let curr = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = carry;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        curr.next = makeNode(sum % 10);
        curr = curr.next;
    }

    return dummy.next;
};
