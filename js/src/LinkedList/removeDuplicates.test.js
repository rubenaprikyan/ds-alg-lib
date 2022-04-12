/**
 * Initialize your data structure here.
 */
const MyLinkedList = function(val, next) {
    this.val = val || 0;
    this.next = next || null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let counter = 0;
    let current = this;

    while(current) {
        if(counter === index) return current.val;

        counter++;
        current = current.next;
    }

    return -1;
};
MyLinkedList.prototype.getn = function(index) {
    let counter = 0;
    let current = this;

    while(current) {
        if(counter === index) return current;

        counter++;
        current = current.next;
    }

    return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let next = { ...this };
    this.val = val;
    this.next = next;
};

MyLinkedList.addHead = (head, val) => {
    let next = {...head};
    head.val = val;
    head.next = next;
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let current = this;
    while(current.next) {
        current = current.next;
    }
    current.next = new MyLinkedList(val);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let head = this.getn(index);
    if(head) {
        MyLinkedList.addHead(head, val);
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let head = this.getn(index);
    if(head) {
        MyLinkedList.deleteNode(head);
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

MyLinkedList.deleteNode = (node) => {
    let next = node.next?.next;
    if(next) {
        node.val = next.val;
        node.next = next.next;
    }

};
