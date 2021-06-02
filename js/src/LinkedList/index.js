'use strict';

function LinkedListNode(value = 0, next = null) {
    this.value = value;
    this.next  = next;

    this.setNext = function(next) {
        this.next = next;
    }
}

/************** UTILITY FUNCTIONS **************/

/**
 *
 * @param head
 * @returns {[]}
 */
LinkedListNode.toArray = (head) => {
    let array = [];

    while(head) {
        array.push(head.value);
        head = head.next;
    }

    return array;
}

/**
 *
 * @param head
 */
LinkedListNode.print = (head) => {
    let current = head;
    while(current) {
        console.log(current.value);
        current = current.next;
    }
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

/************** ALGORITHMS **************/

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
 * @static function removeDupsWithoutExtraBuffer, without using extra space
 * removes all duplicates from the list
 * The Time Complexity is O(n^2), come to the solution with a nested pass
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

/**
 * If the pointer one went through k element, then the pointer two starts iteration, the second pointer will iterate n -k time, and will stop on the kth element from last
 * @param head
 * @param k
 * @returns {null|((value?: any) => Promise<IteratorResult<any>>)|((...args: [] | [any]) => IteratorResult<any, any>)|((...args: [] | [undefined]) => IteratorResult<any, any>)|((...args: [] | [undefined]) => Promise<IteratorResult<any, any>>)|((...args: [] | [any]) => Promise<IteratorResult<any, any>>)}
 */
LinkedListNode.findKthToLastIterative = (head, k) => {
    let p2 = head;
    let p1 = head;

    for (let i = 1; i <= k; i++) {
        if(!p1) {
            return null;
        }
        p1 = p1.next;
    }

    while (p1) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p2;
}

function addNext(current, next) {
    if(current) {
        current.next = next;
    } else {
        current = next;
    }

    return current;
}

LinkedListNode.partition = (head, x) => {
    let current = head;
    let beforeStart = null;
    let beforeEnd = null;
    let afterStart = null;
    let afterEnd = null;

    while(current) {
        const newNode = new LinkedListNode(current.value, null);
        let next = current.next;
        if(current.value < x) {
            if(!beforeStart) {
                beforeStart = current;
                beforeEnd = beforeStart;
            } else {
                beforeEnd.next = current;
                beforeEnd = current;
            }
        } else {
            if(!afterStart) {
                afterStart = current;
                afterEnd = afterStart;
            } else {
                afterEnd.next = current;
                afterEnd = current;
            }
        }
        current = next;

        if(beforeStart == null) {
            return afterStart;
        }
        beforeEnd.next = afterStart;

        return beforeEnd;
    }

    return LinkedListNode.fromArray([...part1, ...part2]);
}

LinkedListNode.sum = (l1, l2) => {
    let remember = 0;
    let lResponse = null;

    while(l1 && l2) {
        let digitSum = l1.value + l2.value; // 10
        let mod = remember;

        if(digitSum > 9) {
            remember = 1;
            mod += digitSum - 10;
        } else {
            remember = 0;
            mod += digitSum;
        }

        let node = new LinkedListNode(mod);
        node.next = lResponse;
        lResponse = node;

        // set current pointers to next
        l1 = l1.next;
        l2 = l2.next;
    }

    return lResponse;
}
LinkedListNode.prototype.get = function(index) {
    let counter = 0;
    let current = this;

    while(current) {
        if(counter === index) return current;

        counter++;
        current = current.next;
    }

    return null;
};

LinkedListNode.prototype.addAtHead = function(val) {
    let next = { ...this };
    this.value = val || 0;
    this.next = next;
};

LinkedListNode.prototype.addTail = function(val) {
    let current = this;
    while(current.next) {
        current = current.next;
    }
    current.next = new LinkedListNode(val);
}

LinkedListNode.prototype.addAtIndex = function(index, val) {
    let head = this.get(index);
    if(head) {
        head.addAtHead(val);
    }
}

LinkedListNode.prototype.deleteAtIndex = function(index) {
    let head = this.get(index);
    if(head) {
        LinkedListNode.deleteNode(head);
    }
}

LinkedListNode.deleteNode = (node) => {
    let next = node.next;
    node.value = next.value;
    node.next = next.next;
};

module.exports = LinkedListNode;
