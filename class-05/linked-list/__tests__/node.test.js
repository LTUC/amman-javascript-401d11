'use strict';

const Node = require('../node');
describe('Node Module', ()=> {
    it('constructor()', ()=> {
        let value = 'my node value';
        let newNode = new Node(value);
        expect(newNode.value).toEqual(value);
        expect(newNode.next).toBeNull();
    }) 
});