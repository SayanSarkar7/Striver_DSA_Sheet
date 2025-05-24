/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * t.c=O[n+n/2]
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {

    if(head===null){
        return;
    }
    let curr=head;
    let count=0;
    while(curr!==null){
        curr=curr.next;
        count++;
    }
    curr=head;
    for(let i=0;i<Math.floor(count/2);i++){
        curr=curr.next;
    }
    return curr;


    
};