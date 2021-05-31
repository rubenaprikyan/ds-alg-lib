const LinkedListNode = require('./src/LinkedList');


const input = LinkedListNode.fromArray([1, 2, 3, 3, 1, 2, 5]);

LinkedListNode.removeDupsWithExtraBuffer(input)
console.log(LinkedListNode.toArray(input));