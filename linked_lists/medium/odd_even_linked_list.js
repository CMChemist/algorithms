// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

// Example 1:

// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL
// Example 2:

// Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL
// Note:

// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ...

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

//  @param {ListNode} head
//  @return {ListNode}
var oddEvenList = function(head) {
    if (head == null) return null;
    let odd = head;
    let even = head.next;
    let evenHead = even;
    while (even != null && even.next != null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};

// My solution (not ideal)
// var oddEvenList = function(head) {
//     let ptr;
//     let offset = 1;
//     if (head !=null && head.next !=null && head.next.next != null) {
//         ptr = head
//     } else {
//         return head;
//     }
//     while(true) {
//         let i = 1;
//         let evenEnd = ptr.next;
//         while (evenEnd != null && i < offset) {
//             evenEnd = evenEnd.next
//             i++
//         }
//         if (evenEnd != null && evenEnd.next != null && i === offset) {
//             const temp = ptr.next;
//             ptr.next = evenEnd.next;
//             evenEnd.next = evenEnd.next.next;
//             ptr.next.next = temp
//             ptr = ptr.next;
//             offset++;
//         } else {
//             return head
//         }
//     }
// };