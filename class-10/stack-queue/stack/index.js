'use strict';

class Stack {

    constructor() {
        this.storage = new Array();
        this.top = null;
    }

    push(item) {
        // add to the beginning
        this.storage.unshift(item);
        this.top = item;
    }

    peek() {
        return this.top;
    }

    pop() {
        // last in first out
        // get me the last one in
        let item = this.storage.shift();
        this.top = this.storage[0];
        return item;
    }

}


module.exports = Stack;
// let arr = [1,2,3] 
// arr.push(4)
// [1, 2, 3, 4]

// arr.unshift(5)
// [5, 1, 2, 3, 4]