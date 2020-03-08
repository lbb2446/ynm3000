import isWeakMap from "../../src/isWeakMap";

import { expect } from "chai";
import "mocha";

describe("is weakMap", () => {
  it("是weakMap", () => {
    let a = new WeakMap();
    a.set({ a: 1 }, 2);
    const result = isWeakMap(a);
    expect(result).to.equal(true);
  });
  it("是Map", () => {
    let a = new Map();
    a.set(function() {}, 3);
    const result = isWeakMap(a);
    expect(result).to.equal(false);
  });
});
