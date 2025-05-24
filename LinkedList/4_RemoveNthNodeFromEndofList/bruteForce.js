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
    if(!head) return null;
    let count=1;
    let curr=head;
    while(curr.next!==null){
        count++;
        curr=curr.next;
    }
    // When it comes to the first element, shift the head to next position
    if(count===n){
        return head.next;
    }

    curr=head;
    for(let i=1;i<count - n;i++){
        curr=curr.next;
    }
    curr.next=curr.next.next;
    return head;



};