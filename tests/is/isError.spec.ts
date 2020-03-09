import isError from "../../src/isError";
import { expect } from "chai";
import "mocha";

describe("is error", () => {
  it("是error", () => {
    const result = isError(new Error());
    expect(result).to.equal(true);
  });
  it("是error构造函数", () => {
    const result = isError(Error);
    expect(result).to.equal(false);
  });
});
