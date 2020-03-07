import isBoolean from "../../src/isBoolean";
import { expect } from "chai";
import "mocha";

describe("is boolean", () => {
  it("是boolean", () => {
    const result = isBoolean(true);
    expect(result).to.equal(true);
  });
  it("是boolean", () => {
    const result = isBoolean(new Boolean(false));
    expect(result).to.equal(true);
  });
  it("不是boolean", () => {
    const result = isBoolean(null);
    expect(result).to.equal(false);
  });
});
