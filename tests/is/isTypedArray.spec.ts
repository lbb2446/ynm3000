import isTypedArray from "../../src/isTypedArray";

import { expect } from "chai";
import "mocha";

describe("is typed array", () => {
  it("是typedarray", () => {
    const result = isTypedArray(new Uint8Array(2));
    expect(result).to.equal(true);
  });
  it("是typedarray", () => {
    const result = isTypedArray(new Uint8Array([1, 2]));
    expect(result).to.equal(true);
  });
  it("是数组", () => {
    const result = isTypedArray([1, 2, 3]);
    expect(result).to.equal(false);
  });
});
