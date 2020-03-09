import isNumber from "../../src/isNumber";

import { expect } from "chai";
import "mocha";

describe("is number", () => {
  it("是number", () => {
    const result = isNumber(new Number(123));
    expect(result).to.equal(true);
  });
  it("是number", () => {
    const result = isNumber(12);
    expect(result).to.equal(true);
  });
  it("不是number", () => {
    const result = isNumber("abc");
    expect(result).to.equal(false);
  });
});
