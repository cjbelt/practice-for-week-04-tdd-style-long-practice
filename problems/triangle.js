// Your code here
class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    hasValidSideLengths() {
        return (this.side1 < this.side2 + this.side3) && (this.side2 < this.side1 + this.side3) && (this.side3 < this.side1 + this.side2);
    }

    validate() {
        if (this.hasValidSideLengths()) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    static getValidTriangles(...triangles) {
        return triangles.filter((triangle) => triangle.isValid);
    }
}

class Scalene extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);
        this.isValidTriangle = this.hasValidSideLengths();
    }

    isScalene() {
        return this.isValidTriangle && (this.side1 !== this.side2) && (this.side2 !== this.side3) && (this.side1 !== this.side3);
    }

    validate() {
        if(this.isScalene()) {
            this.isValidScalene = true;
        } else {
            this.isValidScalene = false;
        }
    }
}

class Isosceles extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);
        this.isValidTriangle = this.hasValidSideLengths();
    }

    isIsosceles() {
        return this.isValidTriangle && ((this.side1 === this.side2) || (this.side1 === this.side3) || (this.side2 === this.side3));
    }

    validate() {
        if (this.isIsosceles()) {
            this.isValidIsosceles = true;
        } else {
            this.isValidIsosceles = false;
        }
    }
}

class Right extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);
        this.isValidTriangle = this.hasValidSideLengths();
    }

    isRight() {
        const sides = [this.side1, this.side2, this.side3];

        const hypotenuse = sides.reduce((accum, side) => {
            if (side > accum) {
                return side;
            }

            return accum;
        });

        const cathetus = sides.filter((side) => {
            return side !== hypotenuse;
        });

        return this.isValidTriangle && ((hypotenuse ** 2) === (cathetus[0] ** 2) + (cathetus[1] ** 2));
    }

    validate() {
        if (this.isRight()) {
            this.isValidRight = true;
        } else {
            this.isValidRight = false;
        }
    }
}

class Equilateral extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);
        this.isValidTriangle = this.hasValidSideLengths();
    }

    isEquilateral() {
        return this.isValidTriangle && (this.side1 === this.side2) && (this.side1 === this.side3);
    }

    validate() {
        if (this.isEquilateral()) {
            this.isValidEquilateral = true;
        } else {
            this.isValidEquilateral = false;
        }
    }
}

module.exports = {
    Triangle,
    Scalene,
    Isosceles,
    Right,
    Equilateral
}
