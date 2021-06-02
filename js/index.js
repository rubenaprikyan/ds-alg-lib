const LinkedListNode = require('./src/LinkedList');

const l1 = LinkedListNode.fromArray([9, 7, 8]);
const l2 = LinkedListNode.fromArray([6, 8, 5]);
l1.deleteAtIndex(1);

console.log(LinkedListNode.toArray(l1))
