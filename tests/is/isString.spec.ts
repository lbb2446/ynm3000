import isString from "../../src/isString";

import { expect } from "chai";
import "mocha";

describe("is string", () => {
  it("是string", () => {
    const result = isString("abc");
    expect(result).to.equal(true);
  });
  it("是string", () => {
    const result = isString(new String("123"));
    expect(result).to.equal(true);
  });
  it("不是string", () => {
    const result = isString(123);
    expect(result).to.equal(false);
  });
});
