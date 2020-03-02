import isLength from "../../src/isLength";
import { expect } from "chai";
import "mocha";

describe("is length", () => {
  it("是正整数", () => {
    const result = isLength(3);
    expect(result).to.equal(true);
  });
  it("是正数", () => {
    const result = isLength(Number.MIN_VALUE);
    expect(result).to.equal(false);
  });
  it("不在安全范围内", () => {
    const result = isLength(Infinity);
    expect(result).to.equal(false);
  });
  it("是数字", () => {
    const result = isLength("3");
    expect(result).to.equal(false);
  });
});
