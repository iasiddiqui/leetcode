/*
Approach (Iterative):
We use a dummy node as a placeholder head and a current pointer to build the merged list. At each step, we compare the values of the two list nodes (list1.val and list2.val) and attach the smaller one to current.next. We then move the pointer forward in the chosen list and advance current. Once one list is exhausted, we connect the remaining nodes of the other list to the merged list. Finally, we return dummy.next, which points to the head of the merged list.
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1); // placeholder head
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach remaining nodes
    current.next = list1 !== null ? list1 : list2;

    return dummy.next; // merged head
};
