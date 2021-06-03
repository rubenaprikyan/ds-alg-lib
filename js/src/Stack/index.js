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

function StackNode(data) {
    this.data = data;
    this.next = null;
}

function Stack() {
    this.top = null;
}

Stack.prototype.push = function(data) {
    let newItem = new StackNode(data);
    newItem.next = this.top;
    this.top = newItem;
}

Stack.prototype.pop = function() {
    if(this.isEmpty()) {
        throw new StackIsEmptyException()
    }
    const data = this.top.data;
    this.top = this.top.next;

    return data;
}

Stack.prototype.peek = function() {
    if (this.isEmpty()) {
        throw new StackIsEmptyException()
    }

    return this.top.data;
}

Stack.prototype.isEmpty = function() {
    return !this.top;
}

module.exports = Stack;
