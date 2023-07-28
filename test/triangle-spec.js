// Your code here
const chai = require('chai');
const expect = chai.expect;
const { Triangle } = require('../problems/triangle');
const { Scalene } = require('../problems/triangle');
const { Isosceles } = require('../problems/triangle');
const { Right } = require('../problems/triangle');
const { Equilateral } = require('../problems/triangle');

let notTriangle;

describe('Triangle class', () => {
    let triangle;
    let triangle2;

    before(() => {
        triangle = new Triangle(2, 3, 4);
        notTriangle = new Triangle(1, 2, 3);
        triangle2 = new Triangle(3, 4, 5);
    });

    describe('constructor', () => {
        it('should declare side1, side2, and side3 properties', () => {
            expect(triangle.side1).to.exist;
            expect(triangle.side2).to.exist;
            expect(triangle.side3).to.exist;
        });

        it('should set values for each side property', () => {
            expect(triangle.side1).to.deep.equal(2);
            expect(triangle.side2).to.deep.equal(3);
            expect(triangle.side3).to.deep.equal(4);
        });
    });

    describe('getPerimeter()', () => {
        it('should return the perimeter of the triangle', () => {
            expect(triangle.getPerimeter()).to.equal(9);
        });
    });

    describe('hasValidSideLengths()', () => {
        it('should return true if the sum of any two sides is greater than the remaining side', () => {
            expect(triangle.hasValidSideLengths()).to.be.true;
        });

        it('should return false if the sum of two sides is not greater than the remaining side', () => {
            expect(notTriangle.hasValidSideLengths()).to.be.false;
        });
    });

    describe('validate()', () => {
        it('should create an "isValid" instance property', () => {
            triangle.validate();
            expect(triangle.isValid).to.exist;
        });

        context('if is a valid triangle', () => {
            it('should set the isValid instance property to true', () => {
                expect(triangle.isValid).to.be.true;
            });
        });

        context('if is an invalid triangle', () => {
            it('should set the isValid instance property to false', () => {
                notTriangle.validate();
                expect(notTriangle.isValid).to.be.false;
            });
        });
    });

    describe('static getValidTriangles(triangles)', () => {
        it('should return the valid triangles of the arguments', () => {
            triangle2.validate();
            expect(Triangle.getValidTriangles(triangle, notTriangle, triangle2)).to.eql([triangle, triangle2]);
        });
    });
});

describe('Scalene class', () => {
    let scalene;
    let notScalene;

    before(() => {
        scalene = new Scalene(3, 4, 5);
        notTriangle = new Scalene(1, 2, 3);
        notScalene = new Scalene(4, 4, 4);
    });

    it('should be an inheritance of the Triangle class', () => {
        expect(scalene).to.be.an.instanceOf(Triangle);
    });

    describe('constructor', () => {
        it('should declare side1, side2, and side3 properties and set values for them', () => {
            expect(scalene.side1).to.exist;
            expect(scalene.side2).to.exist;
            expect(scalene.side3).to.exist;
            expect(scalene.side1).to.equal(3);
            expect(scalene.side2).to.equal(4);
            expect(scalene.side3).to.equal(5);
        });

        it('should add an "isValidTriangle" property and set the value according to hasValidSideLengths Triangle method', () => {
            expect(scalene.isValidTriangle).to.exist;
            expect(scalene.isValidTriangle).to.be.true;
            expect(notTriangle.isValidTriangle).to.be.false;
        })
    });

    describe('isScalene()', () => {
        context('if the triangle has different side lengths', () => {
            it('should return true', () => {
                expect(scalene.isScalene()).to.be.true;
            });
        });

        context('if the triangle has any two sides with equal length', () => {
            it('should return false if any two sides of the triangle have equal lengths', () => {
                expect(notScalene.isScalene()).to.be.false;
            });
        });

        context('if the instance is not a valid triangle', () => {
            it('should return false', () => {
                expect(notTriangle.isScalene()).to.be.false;
            });
        });
    });

    describe('validate()', () => {
        before(() => {
            scalene.validate();
            notScalene.validate();
        });

        it('should create the isValidScalene property', () => {
            expect(scalene.isValidScalene).to.exist;
            expect(notScalene.isValidScalene).to.exist;
        });

        it('should not create and set an isValid property, like in the parent method', () => {
            expect(scalene.isValid).to.not.exist;
            expect(notScalene.isValid).to.not.exist;
        });

        context('if the triangle is scalene', () => {
            it('should set the isValidScalene to true', () => {
                expect(scalene.isValidScalene).to.be.true;
            });
        });

        context('if the triangle is not scalene', () => {
            it('should set the isValidScalene property to false', () => {
                expect(notScalene.isValidScalene).to.be.false;
            });
        });
    });
});

describe('Isosceles class', () => {
    let isosceles;
    let notIsosceles;

    before(() => {
        isosceles = new Isosceles(3, 3, 4);
        notIsosceles = new Isosceles(3, 4, 5);
        notTriangle = new Isosceles(1, 2, 3);
    });

    it('should be an inheritance of Triangle class', () => {
        expect(isosceles).to.be.an.instanceOf(Triangle);
    });

    describe('constructor', () => {
        it('should declare side1, side2 and side3 properties and set them values', () => {
            expect(isosceles.side1).to.exist;
            expect(isosceles.side2).to.exist;
            expect(isosceles.side3).to.exist;
            expect(isosceles.side1).to.equal(3);
            expect(isosceles.side2).to.equal(3);
            expect(isosceles.side3).to.equal(4);
        });

        it('should declare isValidTriangle property and set it according to the value of the hasValidSideLengths instance method', () => {
            expect(isosceles.isValidTriangle).to.be.true;
            expect(notTriangle.isValidTriangle).to.be.false;
            expect(notIsosceles.isValidTriangle).to.be.true;
        });
    });

    describe('isIsosceles()', () => {
        context('if the triangle has any two sides of equal length', () => {
            it('should return true', () => {
                expect(isosceles.isIsosceles()).to.be.true;
            });
        });

        context('if the triangle has different lengths on all sides', () => {
            it('should return false', () => {
                expect(notIsosceles.isIsosceles()).to.be.false;
            });
        });

        context('if the instance is not a valid triangle', () => {
            it('should return false', () => {
                expect(notTriangle.isIsosceles()).to.be.false;
            });
        });
    });

    describe('validate()', () => {
        before(() => {
            isosceles.validate();
            notIsosceles.validate();
            notTriangle.validate();
        });

        it('should create the "isValidIsosceles" property', () => {
            expect(isosceles.isValidIsosceles).to.exist;
            expect(notIsosceles.isValidIsosceles).to.exist;
        });

        it('should not create the "isValid" property like in the parent method', () => {
            expect(isosceles.isValid).to.not.exist;
            expect(notIsosceles.isValid).to.not.exist;
        });

        context('if the instance is a valid isosceles', () => {
            it('should set isValidIsosceles to true', () => {
                expect(isosceles.isValidIsosceles).to.be.true;
            });
        });

        context('if the instance is not a valid isosceles', () => {
            it('should set isValidIsosceles to false', () => {
                expect(notIsosceles.isValidIsosceles).to.be.false;
                expect(notTriangle.isValidIsosceles).to.be.false;
            })
        })
    });
});

describe('Right class', () => {
    let right;
    let notRight;

    before(() => {
        right = new Right(3, 4, 5);
        notRight = new Right(3, 3, 4);
        notTriangle = new Right(1, 2, 3);
    });

    it('should be an inheritance of the Triangle class', () => {
        expect(right).to.be.an.instanceOf(Triangle);
    });

    describe('constructor', () => {
        it('should create and set side1, side2 and side3 properties', () => {
            expect(right.side1).to.exist;
            expect(right.side2).to.exist;
            expect(right.side3).to.exist;
            expect(right.side1).to.equal(3);
            expect(right.side2).to.equal(4);
            expect(right.side3).to.equal(5);
        });

        it('should create and set the "isValidTriangle" property, according the "hasValidSideLengths" method', () => {
            expect(right.isValidTriangle).to.exist;
            expect(notTriangle.isValidTriangle).to.exist;
            expect(right.isValidTriangle).to.be.true;
            expect(notTriangle.isValidTriangle).to.be.false;
        });
    });

    describe('isRight()', () => {
        context('if the triangle is right', () => {
            it('should return true', () => {
                expect(right.isRight()).to.be.true;
            });
        });

        context('if the triangle is not right', () => {
            it('should return false', () => {
                expect(notRight.isRight()).to.be.false;
            });
        });

        context('if the instance is not a valid triangle', () => {
            it('should return false', () => {
                expect(notTriangle.isRight()).to.be.false;
            });
        });
    });

    describe('validate()', () => {
        before(() => {
            right.validate();
            notRight.validate();
            notTriangle.validate();
        });

        it('should create the "isValidRight" property', () => {
            expect(right.isValidRight).to.exist;
            expect(notRight.isValidRight).to.exist;
            expect(notTriangle.isValidRight).to.exist;
        });

        it('should not create the "isValid" property like in the parent method', () => {
            expect(right.isValid).to.not.exist;
            expect(notRight.isValid).to.not.exist;
            expect(notTriangle.isValid).to.not.exist;
        });

        context('if the triangle is right', () => {
            it('should set isValidRight to true', () => {
                expect(right.isValidRight).to.be.true;
            });
        });

        context('if the triangle is not right or the instance is not a valid triangle', () => {
            it('should set isValidRight to false', () => {
                expect(notRight.isValidRight).to.be.false;
                expect(notTriangle.isValidRight).to.be.false;
            });
        });
    });
});

describe('Equilateral class', () => {
    let equilateral;
    let notEquilateral;

    before(() => {
        equilateral = new Equilateral(5, 5, 5);
        notEquilateral = new Equilateral(3, 4, 5);
        notTriangle = new Equilateral(1, 2, 3);
    });

    it('should be an inheritance of Triangle class', () => {
        expect(equilateral).to.be.an.instanceOf(Triangle);
    });

    describe('constructor', () => {
        it('should create and set side1, side2 and side3 properties', () => {
            expect(equilateral.side1).to.exist;
            expect(equilateral.side1).to.equal(5);
            expect(equilateral.side2).to.exist;
            expect(equilateral.side2).to.equal(5);
            expect(equilateral.side3).to.exist;
            expect(equilateral.side3).to.equal(5);
        });

        it("should create and set isValidTriangle property according to the hasValidSideLengths() instance method", () => {
            expect(equilateral.isValidTriangle).to.exist;
            expect(equilateral.isValidTriangle).to.be.true;
            expect(notTriangle.isValidTriangle).to.exist;
            expect(notTriangle.isValidTriangle).to.be.false;
        });
    });

    describe('isEquilateral()', () => {
        context('if the triangle is equilateral', () => {
            it('should return true', () => {
                expect(equilateral.isEquilateral()).to.be.true;
            });
        });

        context('if the triangle is not equilateral', () => {
            it('should return false', () => {
                expect(notEquilateral.isEquilateral()).to.be.false;
            });
        });

        context('if the instance is not a valid triangle', () => {
            it('should return false', () => {
                expect(notTriangle.isEquilateral()).to.be.false;
            });
        });
    });

    describe('validate()', () => {
        before(() => {
            equilateral.validate();
            notEquilateral.validate();
            notTriangle.validate();
        });

        it('should create isValidEquilateral property', () => {
            expect(equilateral.isValidEquilateral).to.exist;
            expect(notEquilateral.isValidEquilateral).to.exist;
            expect(notTriangle.isValidEquilateral).to.exist;
        });

        it('should not create isValid property like in the parent method', () => {
            expect(equilateral.isValid).to.not.exist;
            expect(notEquilateral.isValid).to.not.exist;
            expect(notTriangle.isValid).to.not.exist;
        });

        context('if the triangle is equilateral', () => {
            it('should set isValidEquilateral to true', () => {
                expect(equilateral.isValidEquilateral).to.be.true;
            });
        });

        context('if the instance is not a valid triangle or the triangle is not equilateral', () => {
            it('should set isValidEquilateral to false', () => {
                expect(notEquilateral.isValidEquilateral).to.be.false;
                expect(notTriangle.isValidEquilateral).to.be.false;
            });
        });
    });
});
