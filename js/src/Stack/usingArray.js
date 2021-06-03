'use strict';

function Stack(data = []) {
    this.list = data;
}

Stack.prototype.push = function(data) {
    this.list.push(data)
}

Stack.prototype.pop = function() {
    return this.list.pop();
}

Stack.prototype.isEmpty = function() {
    return !!this.list.length;
}

Stack.prototype.peek = function() {
    return this.list[this.list.length - 1]
}

let stack = new Stack([1, 2, 3]);

console.log(stack.pop());
console.log(stack.push(10));
console.log(stack.peek(10));
console.log(stack);