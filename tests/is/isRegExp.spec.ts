import isRegExp from "../../src/isRegExp";
import { expect } from "chai";
import "mocha";

describe("is regExp", () => {
  it("是regExp", () => {
    let reg = /abc/;
    const result = isRegExp(reg);
    expect(result).to.equal(true);
  });
  it("是相似字符串", () => {
    const result = isRegExp("/abc/");
    expect(result).to.equal(false);
  });
});
