const flatten = function(array) {
  let result = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      for (let inner of element) {
        result.push(inner);
      }
    }
    else {
      result.push(element);
    }
  }

  return result;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
