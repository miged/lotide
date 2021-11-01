const middle = function(array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  }

  // even arrays
  if (array.length % 2 === 0) {
    newArray.push(array[Math.floor(array.length / 2) - 1]);
  }

  newArray.push(array[Math.floor(array.length / 2)]);
  return newArray;
};

module.exports = middle;
