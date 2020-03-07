import isUndefined from "../../src/isUndefined";
import { expect } from "chai";
import "mocha";

describe("is undifined", () => {
  it("是undifined", () => {
    const result = isUndefined(void 0);
    expect(result).to.equal(true);
  });
  it("不是undifined", () => {
    const result = isUndefined(null);
    expect(result).to.equal(false);
  });
});
