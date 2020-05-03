import isSymbol from "../../src/isSymbol";
import { expect } from "chai";
import "mocha";

describe("is symbol", () => {
  it("是symbol", () => {
    const result = isSymbol(Symbol.iterator);
    expect(result).to.equal(true);
  });
  it("是symbol实例", () => {
    const result = isSymbol(Symbol("foo"));
    expect(result).to.equal(true);
  });
  it("是字符串", () => {
    const result = isSymbol("abc");
    expect(result).to.equal(false);
  });
});
