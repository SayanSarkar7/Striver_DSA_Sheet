/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head===null){
        return null;
    }
    head=head.reverse();
    return head;
};
ListNode.prototype.reverse=function(){
    let current=this;
    let prev=null;
    while(current!==null){
        let nextNode=current.next;
        current.next=prev;
        prev=current;
        current=nextNode;
    }
    this.head=prev;
    return this.head;
    
}







