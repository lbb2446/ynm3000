import isObject from "../../src/isObject";

import { expect } from "chai";
import "mocha";

describe("is object", () => {
  it("是object", () => {
    const result = isObject(new Number(123));
    expect(result).to.equal(true);
  });
  it("是null", () => {
    const result = isObject(null);
    expect(result).to.equal(false);
  });
  it("是undefined", () => {
    const result = isObject(undefined);
    expect(result).to.equal(false);
  });
  it("是数组", () => {
    const result = isObject([1, 2, 3]);
    expect(result).to.equal(true);
  });
  it("是object", () => {
    const result = isObject({ a: 1 });
    expect(result).to.equal(true);
  });
  it("是function", () => {
    const result = isObject(function() {});
    expect(result).to.equal(true);
  });
});
