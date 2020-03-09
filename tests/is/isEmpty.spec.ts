import isEmpty from "../../src/isEmpty";

import { expect } from "chai";
import "mocha";

describe("is empty", () => {
  it("null", () => {
    const result = isEmpty(null);
    expect(result).to.equal(true);
  });
  it("boolean", () => {
    const result = isEmpty(true);
    expect(result).to.equal(true);
  });
  it("数字", () => {
    const result = isEmpty(3);
    expect(result).to.equal(true);
  });
  it("数组", () => {
    const result = isEmpty([1, 2, 3]);
    expect(result).to.equal(false);
  });
  it("字符串", () => {
    const result = isEmpty("abc");
    expect(result).to.equal(false);
  });
  it("对象", () => {
    const result = isEmpty({ a: 1 });
    expect(result).to.equal(false);
  });
});
