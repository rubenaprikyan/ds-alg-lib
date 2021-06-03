'use strict';

const Stack  = require('../Stack');

const StackIsEmptyException = require('../Stack/StackIsEmptyException');

/**
 * StackOfStacks
 * @Problem
 *   Assume that there is not a single stack, there is a set of sub stacks such this points are happened inside
 *      1. The sub stack has threshold, it has capacity
 *      2. The StackOfStacks has a push operation, and it should create a new stack, once the previews stack will exceeds capacity
 *      3. The StackOfStacks has a pop operation as well
 *      4. The StackOfStacks has a popAtIndex(index) method, which will pop the specified stack corresponds to the index
 * @param capacity - the size of a sub stack
 * @constructor
 */
function StackOfStacks(capacity) {
    this.stacks = [];
    this.stakCapacity = capacity;
}

StackOfStacks.prototype.push = function(item) {
    let index = this.stacks.length;

    if(!index) {
       const newStack = new Stack();
        newStack.push(item)
        this.stacks.push(newStack);
    } else {
        const currentStack = this.stacks[index - 1];
        if (currentStack.getSize() < index) {
            currentStack.push(item);
        } else {
            const newStack = new Stack();
            newStack.push(item);
            this.stacks.push(newStack);
        }
    }
}

StackOfStacks.prototype.getCurrentStack = function() {
    return this.stacks[this.stacks.length - 1];
}

StackOfStacks.prototype.pop = function() {
    if(this.isEmpty()) throw new StackIsEmptyException('StackOfStacks is Empty.');

    const currentStack = this.getCurrentStack();
    // ensure that there can not be empty stack
    const data = currentStack.pop();
    if(!currentStack.getSize()) {
        // remove the empty stack, this is the operation to ensure there is no empty stacks in stack pool
        this.stacks.pop();
    }

    return data;
}

StackOfStacks.prototype.isEmpty = function() {
    const size = this.stacks.length;
    return !!size;
}

// int this operation need to left shift all stacks, where stackIndex > index
StackOfStacks.prototype.popAtIndex = function(index) {
    // @TODO Implementation
};

let stackOfStacks = new StackOfStacks(3);
stackOfStacks.push(1);
stackOfStacks.push(2);
// stackOfStacks.push(4);
// stackOfStacks.push(3);

console.log(stackOfStacks);
