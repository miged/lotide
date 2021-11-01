const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [] for [1, 2]", () => {
    const input = [1, 2];
    const expected = [];
    assert.deepEqual(middle(input), expected);
  });
  it("returns [2] for [1, 2, 3]", () => {
    const input = [1, 2, 3];
    const expected = [2];
    assert.deepEqual(middle(input), expected);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    const input = [1, 2, 3, 4];
    const expected = [2, 3];
    assert.deepEqual(middle(input), expected);
  });
});
