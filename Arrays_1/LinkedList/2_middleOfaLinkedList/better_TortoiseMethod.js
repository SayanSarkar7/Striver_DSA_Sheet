/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * t.c=O[n/2]
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {

    if(head===null){
        return;
    }
    // Tortoise method 
    let slow=head,fast=head;
    while( fast!==null && fast.next!==null){
        fast=fast.next.next;
        slow=slow.next;
    }
    return slow;

};