function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  if (typeof n !== "number") {
    throw new TypeError("the argument must be a number");
  } else if (n < 1 || n > 1000000) {
    throw new RangeError("the number must be less than 1 and more than 1000000");
  }

  return 1/n;
}

module.exports = {
  returnsThree,
  reciprocal
};
