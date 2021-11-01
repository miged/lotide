const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("returns true for two equal objects", () => {
    const obj1 = { a: "1", b: "2" };
    const obj2 = { b: "2", a: "1" };
    assert.isTrue(eqObjects(obj1, obj2));
  });
  it("returns false for two non-euqual objects", () => {
    const obj1 = { a: "1", b: "2" };
    const obj2 = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(obj1, obj2));
  });
  it("returns true for two equal objects with array", () => {
    const obj1 = { c: "1", d: ["2", 3] };
    const obj2 = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(obj1, obj2));
  });
  it("returns false for two non-euqual objects with array", () => {
    const obj1 = { c: "1", d: ["2", 3] };
    const obj2 = { c: "1", d: ["2", 3, 4] };
    assert.isFalse(eqObjects(obj1, obj2));
  });
  it("returns true for two equal objects with objects", () => {
    const obj1 = { a: { z: 1 }, b: 2 };
    const obj2 = { a: { z: 1 }, b: 2 };
    assert.isTrue(eqObjects(obj1, obj2));
  });
  it("returns false for two non-euqual objects with objects", () => {
    const obj1 = { a: { y: 0, z: 1 }, b: 2 };
    const obj2 = { a: { z: 1 }, b: 2 };
    assert.isFalse(eqObjects(obj1, obj2));
  });
  it("returns false for two non-euqual objects with objects", () => {
    const obj1 = { a: { y: 0, z: 1 }, b: 2 };
    const obj2 = { a: 1, b: 2 };
    assert.isFalse(eqObjects(obj1, obj2));
  });
});
