import isArrayBuffer from "../../src/isArrayBuffer";
import { expect } from "chai";
import "mocha";

describe("is array buffer", () => {
  it("是array buffer", () => {
    const result = isArrayBuffer(new ArrayBuffer(2));
    expect(result).to.equal(true);
  });
  it("是数组", () => {
    const result = isArrayBuffer(new Array(2));
    expect(result).to.equal(false);
  });
});
