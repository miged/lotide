const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for two equal arrays", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    assert.isTrue(eqArrays(arr1, arr2));
  });
  it("returns false for two non-equal arrays", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 2, 1];
    assert.isFalse(eqArrays(arr1, arr2));
  });
  it("returns true for two equal arrays", () => {
    const arr1 = ["1", "2", "3"];
    const arr2 = ["1", "2", "3"];
    assert.isTrue(eqArrays(arr1, arr2));
  });
  it("returns false for two non-equal arrays", () => {
    const arr1 = ["1", "2", "3"];
    const arr2 = ["1", "2", 3];
    assert.isFalse(eqArrays(arr1, arr2));
  });
  it("returns true for two equal arrays with array", () => {
    const arr1 = [[2, 3], [4]];
    const arr2 = [[2, 3], [4]];
    assert.isTrue(eqArrays(arr1, arr2));
  });
  it("returns false for two non-equal arrays with array", () => {
    const arr1 = [[2, 3], [4]];
    const arr2 = [[2, 3], [4, 5]];
    assert.isFalse(eqArrays(arr1, arr2));
  });
  it("returns false for two non-equal arrays with array", () => {
    const arr1 = [[2, 3], [4]];
    const arr2 = [[2, 3], 4];
    assert.isFalse(eqArrays(arr1, arr2));
  });
});
