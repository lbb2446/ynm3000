import isDate from "../../src/isDate";
import { expect } from "chai";
import "mocha";

describe("is Date", () => {
  it("是日期", () => {
    const result = isDate(new Date());
    expect(result).to.equal(true);
  });
  it("不是日期", () => {
    const result = isDate("Mon April 23 2012");
    expect(result).to.equal(false);
  });
});
