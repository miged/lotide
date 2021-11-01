const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const input = ["Hello", "Lighthouse", "Labs"];
    const expected = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(input), expected);
  });
  it("returns [] for ['Hello']", () => {
    assert.deepEqual(tail(['Hello']), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual([], []);
  });
});
