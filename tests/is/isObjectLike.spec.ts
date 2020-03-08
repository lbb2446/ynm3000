import isObjectLike from "../../src/isObjectLike";

import { expect } from "chai";
import "mocha";

describe("is object alike", () => {
  it("是对象", () => {
    const result = isObjectLike({});
    expect(result).to.equal(true);
  });
  it("是数组", () => {
    const result = isObjectLike([1, 2, 3]);
    expect(result).to.equal(true);
  });
  it("是函数", () => {
    const result = isObjectLike(Function);
    expect(result).to.equal(false);
  });
  it("是null", () => {
    const result = isObjectLike(null);
    expect(result).to.equal(false);
  });
});
