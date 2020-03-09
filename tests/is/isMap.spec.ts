import isMap from "../../src/isMap";

import { expect } from "chai";
import "mocha";

describe("is map", () => {
  it("是map", () => {
    let a = new Map();
    a.set("b", 1);
    const result = isMap(a);
    expect(result).to.equal(true);
  });
  it("不是map", () => {
    let b = new WeakMap();
    b.set({}, 1);
    const result = isMap(b);
    expect(result).to.equal(false);
  });
});
