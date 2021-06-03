'use strict';

function StackIsEmptyException(message = "Empty Stack Operation", ...args) {
    let tmp = Error.apply(this, { message, ...args })
    tmp.name = this.name = 'StackIsEmptyException'
    this.message = tmp.message

    Object.defineProperty(this, 'stack', {
        get: function () {
            return tmp.stack
        }
    })

    return this
}
StackIsEmptyException.prototype = Error.prototype;

/**
 *
 * @param data - the value of the node, should be integer due to assumption for the Stack definition
 * @param currentMin - the previews minimum value
 * @constructor
 */
function StackNodeWithCurrentMin(data, currentMin) {
    this.data = data;
    this.next = null;
    this.currentMin = currentMin;
}

/**
 * Stack<T>,It Supposed the T is Integer (To avoid additional bugs feel not comfortable to use other type as T)
 * @constructor
 */
function Stack() {
    this.top = null;
    this.min = null
}

/**
 *
 * @param data
 */
Stack.prototype.push = function(data) {
    if(this.top) {
        if(data < this.min) {
            this.min = data;
        }
    } else {
        this.min = data;
    }

    let newItem = new StackNodeWithCurrentMin(data, this.min);
    newItem.next = this.top;
    this.top = newItem;
}

/**
 * pop function
 * @returns {any} - the value of deleted top
 */
Stack.prototype.pop = function() {
    if(this.isEmpty()) {
        throw new StackIsEmptyException()
    }

    const data = this.top.data;
    this.top = this.top.next;

    this.min = this.top.currentMin;

    return data;
}

/**
 * return the  top element
 * @returns {*}
 */
Stack.prototype.peek = function() {
    if (this.isEmpty()) {
        throw new StackIsEmptyException()
    }

    return this.top.data;
}

/**
 * check stack is empty or not
 * @returns {boolean}
 */
Stack.prototype.isEmpty = function() {
    return !this.top;
}

/**
 * Takes O(1) runtime for getting minimum value of the stack
 */
Stack.prototype.getMin = function() {
    if(!this.top) {
        throw StackIsEmptyException();
    }

    return this.min;
}

/**
 * Generates a stack from set of values
 * @param arr - the set of values
 * @returns {Stack} - stack
 */
Stack.fromArray = (arr = []) => {
    const stack = new Stack();
    arr.forEach(item => {
        stack.push(item);
    });

    return stack;
}

const stack = new Stack();

stack.push(10);
stack.push(11);
console.log(stack.getMin()); // 10

stack.push(3);
stack.push(20);
stack.push(15);
stack.push(8);

console.log(stack.getMin()); // 3

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log(stack.getMin()); // 10

