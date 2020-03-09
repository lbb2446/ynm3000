import isSet from "../../src/isSet";

import { expect } from "chai";
import "mocha";

describe("is set", () => {
  it("是set", () => {
    let a = new Set();
    a.add(1);
    const result = isSet(a);
    expect(result).to.equal(true);
  });
  it("不是set", () => {
    let b = new WeakSet();
    b.add({});
    const result = isSet(b);
    expect(result).to.equal(false);
  });
});
