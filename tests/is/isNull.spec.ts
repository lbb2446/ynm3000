import isNull from "../../src/isNull";

import { expect } from "chai";
import "mocha";

describe("is null", () => {
  it("是null", () => {
    const result = isNull(null);
    expect(result).to.equal(true);
  });
  it("是undefined", () => {
    const result = isNull(undefined);
    expect(result).to.equal(false);
  });
  it("是undefined", () => {
    const result = isNull(void 0);
    expect(result).to.equal(false);
  });
});
