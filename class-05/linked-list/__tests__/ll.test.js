'use strict';

let LinkedList = require('../linked-list');

describe('LinkedList Module()', ()=> {
    it('constructor()', ()=> {
        let newList = new LinkedList();
        expect(newList.head).toBeNull();
    });

    it('append()', ()=> {
        let newList = new LinkedList();
        let initialValue = 'First Item';
        newList.append(initialValue);
        expect(newList.head.value).toEqual(initialValue);

        let anotherOne = 'Second Item';
        newList.append(anotherOne);
        expect(newList.head.next.value).toEqual(anotherOne);
        expect(newList.head.next.next).toBeNull();
        expect(newList.head.value).toEqual(initialValue);
    });
});