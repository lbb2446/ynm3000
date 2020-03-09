import isWeakSet from "../../src/isWeakSet";

import { expect } from "chai";
import "mocha";

describe("is weakSet", () => {
  it("是weakSet", () => {
    let a = new WeakSet();
    a.add({ b: 1 });
    const result = isWeakSet(a);
    expect(result).to.equal(true);
  });
  it("是Set", () => {
    let a = new Set();
    a.add("item");
    const result = isWeakSet(a);
    expect(result).to.equal(false);
  });
});
