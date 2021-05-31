'use strict';

function LinkedListNode(value = 0, next = null) {
    this.value = value;
    this.next  = next;
}

/**
 * function search
 * finds the first element width value {value}, if can not be found it returns -1
 * Time Complexity in worst case is O(n) - where n is depth of the list
 * @param value
 * @returns {null}
 */
LinkedListNode.prototype.search = function(value) {
    let current = { ...this };

    while(current !== null && current.value !== value) {
        current = current.next;
    }

    return current;
}

/**
 * static function fromArray takes an array as an input and generates a singly LinkedList
 *
 * @param arr{Array<any>} - array of numbers as node's values
 * @returns {LinkedListNode} - returns a linked list generated from input array
 */
LinkedListNode.fromArray = (arr) => {
    const length = arr.length;
    let root = null;

    for (let i = length - 1; i >= 0; i--) {
        root = new LinkedListNode(arr[i], root);
    }

    return root;
}

/**
 * static function fromReverseArray takes an array as an input and generates a singly LinkedList
 *
 * @param arr{Array<any>} - array of numbers as node's values
 * @returns {LinkedListNode} - returns a linked list generated from input array's reversed variant
 */
LinkedListNode.fromReverseArray = (arr) => {
    const length = arr.length;
    let root = new LinkedListNode(arr[length - 1]);

    for (let i = 1; i < length; i++) {
        root = new LinkedListNode(arr[i], root);
    }

    return root;
}
LinkedListNode.prototype.hasCycle = function() {}

/**
 * @static function removeDupsWithExtraBuffer, using extra buffer
 * removes all duplicates from the list
 * The Time Complexity is O(n), come to the solution with a single pass
 * The Space Complexity is O()
 * @param head - the head of list
 * @returns <LinkedListNode> - head - without duplicates
 */
LinkedListNode.removeDupsWithExtraBuffer = (head) => {
    const set = new Set();
    let prev = null;

    while(head) {
       if (set.has(head.value)) {
           // remove current node from the list
           prev.next = head.next;
       } else {
           set.add(head.value);
           prev = head;
       }

       head = head.next;
    }

    return head;
}

/**
 * @static function removeDupsWithoutExtraBuffer, using extra buffer
 * removes all duplicates from the list
 * The Time Complexity is O(n), come to the solution with a single pass
 * The Space Complexity is O(1)
 * @param head - the head of list
 * @returns <LinkedListNode> - head - without duplicates
 */
LinkedListNode.removeDupsWithExtraBuffer = (head) => {
    let current = head;

    while (current) {
        let runner = current;
        while(runner.next) {
            if(runner.next.value === current.value) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }

        current = current.next;
    }

    return current;
}



/************** UTILITY FUNCTIONS **************/
LinkedListNode.toArray = (head) => {
    let array = [];

    while(head) {
        array.push(head.value);
        head = head.next;
    }

    return array;
}

LinkedListNode.print = (head) => {
    let current = head;
    while(current) {
        console.log(current.value);
        current = current.next;
    }
}

module.exports = LinkedListNode;
