const tail = function(array) {
  if (!array) {
    return undefined;
  }
  if (array.length === 1) {
    return [];
  }

  return array.slice(1);
};

module.exports = tail;
