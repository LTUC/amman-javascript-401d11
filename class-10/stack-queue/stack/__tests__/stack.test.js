'use strict';

const Stack = require('../index');

describe('stack', ()=> {

    it('creates an instance', ()=> {
        let stack = new Stack();
        expect(stack instanceof Stack).toBeTruthy();
        expect(stack.top).toBeNull();
    });

    it('returns null on peek', ()=> {
        let stack = new Stack();
        expect(stack.peek()).toBeNull();
    });

    it('peek returns the last item in stack', ()=> {
        let stack = new Stack();
        stack.push(1);
        expect(stack.peek()).toEqual(1);
        stack.push(2);
        expect(stack.peek()).toEqual(2);
    });

    it('push updates the top', ()=> {
        let stack = new Stack();
        stack.push(1);
        expect(stack.top).toEqual(1);
        stack.push(2);
        expect(stack.top).toEqual(2);
    });

    it('pop()', ()=> {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toEqual(3);
        expect(stack.pop()).toEqual(2);
        expect(stack.pop()).toEqual(1);
    });

    


});