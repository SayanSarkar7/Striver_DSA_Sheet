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
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  let l1 = new ListNode();
  let l2 = new ListNode();
  let temp = new ListNode();
  if (list1.val < list2.val) {
    l1 = list1;
    l2 = list2;
  } else {
    l1 = list2;
    l2 = list1;
  }
  temp = l1;
  let head = l1;
  l1 = l1.next;
  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      [l1, l2] = [l2, l1];
    }
    temp.next = l1;
    temp = temp.next;
    l1 = l1.next;
  }

  temp.next = l1 !== null ? l1 : l2;
  return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

let result = mergeTwoLists(list1, list2);

let output = "";
while (result != null) {
  output += result.val + " -> ";
  result = result.next;
}
output += "null";
console.log(output);

// Output: 1 → 1 → 2 → 3 → 4 → 4
