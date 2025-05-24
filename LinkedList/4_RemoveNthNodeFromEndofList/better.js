var removeNthFromEnd = function(head, n) {
    if (!head) return null;

    let fast = head;
    let slow = head;

    // Move fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        if (fast === null) return null; // n is greater than list length
        fast = fast.next;
    }

    // If fast is null, that means we need to remove the head
    if (fast === null) return head.next;

    // Move fast to the end, maintaining the gap
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Skip the target node
    slow.next = slow.next.next;

    return head;
};
