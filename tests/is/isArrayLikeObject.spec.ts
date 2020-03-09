import isArrayLikeObject from "../../src/isArrayLikeObject";

import { JSDOM } from "jsdom";
import { expect } from "chai";
import "mocha";

const { document } = new JSDOM(`...`).window;
describe("is array object alike", () => {
  it("是数组", () => {
    const result = isArrayLikeObject([1, 2, 3]);
    expect(result).to.equal(true);
  });
  it("是object", () => {
    const result = isArrayLikeObject({ a: 1 });
    expect(result).to.equal(false);
  });
  it("是字符串", () => {
    const result = isArrayLikeObject("abc");
    expect(result).to.equal(false);
  });
  it("是document element", () => {
    const result = isArrayLikeObject(document.body.children);
    expect(result).to.equal(true);
  });
  it("是字符串", () => {
    const result = isArrayLikeObject("abc");
    expect(result).to.equal(false);
  });
  it("是function", () => {
    const result = isArrayLikeObject(Function);
    expect(result).to.equal(false);
  });
});
