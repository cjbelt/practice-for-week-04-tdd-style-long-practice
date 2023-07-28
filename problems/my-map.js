function myMap(inputArray, callback) {
  // Your code here
  const newArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    const element = inputArray[i];
    const newEl = callback(element, i, inputArray);

    newArray.push(newEl);
  }

  return newArray;
}

module.exports = myMap;
