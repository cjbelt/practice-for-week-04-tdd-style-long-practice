// Your code here
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const myMap = require('../problems/my-map');

let array;
let cb;

before(() => {
    cb = function(element) {
        return element * 2;
    }
});

beforeEach(() => {
    array = new Array(1, 2, 3, 4, 5);
});

describe('myMap(array, cb)', () => {
    it('should return a new array which values will be returned by the callback function called on each element of a given array', () => {
        expect(myMap(array, cb)).to.eql([2, 4, 6, 8, 10]);
    });

    it('should not change the original array', () => {
        const newArr = myMap(array, cb);
        expect(newArr).to.eql([2, 4, 6, 8, 10]);
        expect(array).to.eql([1, 2, 3, 4, 5]);
    });

    it('should not use the Array.map method', () => {
        const spy = chai.spy.on(array, 'map');
        const newArr = myMap(array, cb);
        expect(spy).to.have.not.been.called();
    });

    it('should call the passed-in callback function', () => {
        const spy = chai.spy(cb);
        const newArr = myMap(array, spy);
        expect(spy).to.have.been.called();
    })

    context('if a empty array is provided', () => {
        it('should return an empty array if a empty array is provided', () => {
            expect(myMap([], cb)).to.eql([]);
        });
    });

    context('if the argument is not an array or the callback is not a function', () => {
        it('should throw a TypeError', () => {
            expect(() => myMap(null, cb)).to.throw(TypeError);
            expect(() => myMap(array, null)).to.throw(TypeError);
        });
    });
});
