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
    let ptr;
    let offset = 1;
    if (head !=null && head.next !=null && head.next.next != null) {
        ptr = head
    } else {
        return head;
    }
    while(true) {
        let i = 1;
        let evenEnd = ptr.next;
        while (evenEnd != null && i < offset) {
            evenEnd = evenEnd.next
            i++
        }
        if (evenEnd != null && evenEnd.next != null && i === offset) {
            const temp = ptr.next;
            ptr.next = evenEnd.next;
            evenEnd.next = evenEnd.next.next;
            ptr.next.next = temp
            ptr = ptr.next;
            offset++;
        } else {
            return head
        }
    }
};