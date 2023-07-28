// Your code here
const chai = require('chai');
const expect = chai.expect;
const { returnsThree } = require('../problems/number-fun');
const { reciprocal } = require('../problems/number-fun');

describe('function returnsThree()', () => {
    it('should returns number 3', () => {
        expect(returnsThree()).to.deep.equal(3);
    });
});

describe('function reciprocal(num)', () => {
    context('if the argument is valid', () => {
        it('should return reciprocal number of the argument', () => {
            expect(reciprocal(3)).to.equal(1/3);
            expect(reciprocal(145)).to.equal(1/145);
            expect(reciprocal(4/3)).to.equal(3/4);
            expect(reciprocal(10000)).to.equal(1/10000);
        });
    });

    context('if the argument is not valid', () => {
        it('should throw a TypeError if the argument is not a number', () => {
            expect(() => reciprocal(null)).to.throw(TypeError);
        });

        it('should throw a RangeError if the argument is less than 1 and more than 1000000', () => {
            expect(() => reciprocal(0)).to.throw(RangeError);
            expect(() => reciprocal(10000000000)).to.throw(RangeError);
        });
    });

})
