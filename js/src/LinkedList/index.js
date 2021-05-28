'use strict';

function LinkedListNode(value = 0, next = null) {
    this.value = value;
    this.next  = next;
}
function LinkedList(args) {
    LinkedListNode.call(this, [...args]);
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
        console.log(current)
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
LinkedList.fromArray = (arr) => {
    const length = arr.length;
    let root = new LinkedListNode(arr[length - 1]);

    for (let i = length - 1; i >= 0; i--) {
        console.log(i);
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
LinkedList.fromReverseArray = (arr) => {
    const length = arr.length;
    let root = new LinkedListNode(arr[length - 1]);

    for (let i = 1; i < length; i++) {
        root = new LinkedListNode(arr[i], root);
    }

    return root;
}

LinkedListNode.prototype.toArray = function() {
    const arr = [];
    let current = this;
    while(current.next !== null) {
        arr.push(current.value);
        current = current.next
    }
    return arr;
}
LinkedListNode.prototype.hasCycle = function() {
    const head = { ...this };
    let current = head;
    while() {

    }
}

module.exports.LinkedListNode = LinkedListNode;
module.exports = LinkedList;
