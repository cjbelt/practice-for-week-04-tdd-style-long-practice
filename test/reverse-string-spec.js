// Your code here
const chai = require('chai');
const expect = chai.expect;

const reverseString = require('../problems/reverse-string');

describe("function reverseString()", function() {
    it('should reverse the string argument', () => {
        const reversed = reverseString("fun");
        expect(reversed).to.be.equal("nuf");
    });

    it('should throw a TypeError if the argument is not a string', function() {
        expect(reverseString).to.throw(TypeError);
    });
});
