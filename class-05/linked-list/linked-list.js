'use strict';
// {
// 	value: 1,
// 	next: {
// 		value:2,
// 		next: {
// 			value:3,
// 			next: {
// 				value:4,
// 				next: {
                    // value: 5,
                    // next: null
//              }
// 			}
// 		}
// 	}
// }

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        // create a node for this value
        let newNode = new Node(value);
       
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            // reached the end of the linkedlist
            currentNode.next = newNode;
        }
    }
}

module.exports = LinkedList