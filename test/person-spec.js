// Your code here
const chai = require('chai');
const expect = chai.expect;
const Person = require('../problems/person');

describe('Person class', () => {
    let person1;
    let person2;

    before(() => {
        person1 = new Person("John", 26);
        person2 = new Person("Mary", 23);
    });

    describe('constructor', () => {
        it('should contain name and age instance properties', () => {
            expect(person1.name).to.exist;
            expect(person1.age).to.exist;
        });

        it('should set values for the name and age properties', () => {
            expect(person1.name).to.deep.equal("John");
            expect(person1.age).to.deep.equal(26);
        });
    });

    describe('sayHello()', () => {
        it('should say a greeting message with the Person instance name', () => {
            expect(person1.sayHello()).to.equal(`${person1.name} says hello!`);
        });
    });

    describe('visit(otherPerson)', () => {
        it('should return a message stating that the instance Person visited the passed-in Person', () => {
            expect(person1.visit(person2)).to.equal(`${person1.name} visited ${person2.name}`);
        });
    });

    describe('switchVisit(otherPerson)', () => {
        it('should invoke the otherPerson visit function with the current instance as argument', () => {
            expect(person1.switchVisit(person2)).to.equal(`${person2.name} visited ${person1.name}`);
        });
    });

    describe('update(obj)', () => {
        context('if the argument is a valid object', () => {
            it('should update the name and age properties with the object values', () => {
                person2.update({name: "Jeniffer", age: 29});
                expect(person2.name).to.equal("Jeniffer");
                expect(person2.age).to.equal(29);
            });
        });

        context('if the argument is not a valid object', () => {
            it('should throw a TypeError if the argument is not a object', () => {
                expect(() => person2.update(null)).to.throw(TypeError, "not a object");
            })

            it('should throw a TypeError if the object does not have a name and an age property', () => {
                expect(() => person2.update({})).to.throw(TypeError, "a name or an age property");
            });
        });
    });

    describe('tryUpdate(obj)', () => {
        context('if the update(obj) function is called succesfully', () => {
            it('should return true', () => {
                expect(person2.tryUpdate({name: "Alice", age: 25})).to.be.true;
            });
        });

        context('if the update(obj) function is not called succesfully', () => {
            it('should return false', () => {
                expect(person2.tryUpdate({})).to.be.false;
                expect(person2.tryUpdate(null)).to.be.false;
            });
        });
    });

    describe('greetAll(array)', () => {
        let array;

        before(() => {
            array = [person1, person2];
        });

        it('should return an array of sayHello() strings from each instance', () => {
            const strings = Person.greetAll(array);
            for (let i = 0; i < strings; i++) {
                expect(strings[i]).to.equal(array[i].sayHello());
            }
        });
    });
});
