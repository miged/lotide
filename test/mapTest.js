const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {
  it("returns [ 'g', 'c', 't', 'm', 't' ]", () => {
    const input = ["ground", "control", "to", "major", "tom"];
    const expected = [ 'g', 'c', 't', 'm', 't' ];
    assert.deepEqual(map(input, word => word[0]), expected);
  });
  it("returns [ 2, 12.5, 15, 25, 50 ]", () => {
    const input = [4, 25, 30, 50, 100];
    const expected = [ 2, 12.5, 15, 25, 50 ];
    assert.deepEqual(map(input, num => num / 2), expected);
  });
});
