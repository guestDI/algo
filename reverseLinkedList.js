/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/** Recursive
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    //Basic case
    if (!head?.next) return head;

    let rest = reverseList(head.next);
    head.next.next = head;

    head.next = null;
    return rest;
};

/** Iterative
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListIterative = function(head) {
    if(!head?.next) {
      return head
    }

    let first = head;
    let second = first.next;
    let temp = null;

    while(second) {
      temp = second.next
      second.next = first;
      first = second;
      second = temp;
    }
    head.next = null
    head = first
    first = null

    return head
};