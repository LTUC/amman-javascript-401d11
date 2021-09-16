'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        } 
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
}

class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }

    hash(key) {
        // hashing algorithm
        return key.split('').reduce((acc, char)=> {
            console.log("char.charCodeAt(0) =====> ", char.charCodeAt(0))
            return acc + char.charCodeAt(0);
        }, 0) * 599 % this.size;
        // return the value of the hashed key
    }

    set(key, value) {
        // set key in hashmap to have this value
        // this.map[hash] = store data  -> if there's a linked list add to it.
        // [0,1,2,3,4,45,6.. .. size]
        let hash = this.hash(key); // number
        console.log("hash >>", hash)
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        let entry = { [key] : value}  //-> {name: rawan}
        this.map[hash].append(entry);
    }
}

const hashmap = new Hashmap(1024);
hashmap.set('name', 'Samah');
hashmap.set('age', 23);
hashmap.set('cat', 'Kitty');
hashmap.set('act', 'Jonny Depp');

console.log(hashmap)
console.log(hashmap.map[951]);
console.log(hashmap.map[75]);
console.log(hashmap.map[520]);
console.log(hashmap.map[520].head.next);
