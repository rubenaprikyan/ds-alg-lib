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

module.exprots = StackIsEmptyException;
