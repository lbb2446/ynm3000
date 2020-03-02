import isArrayLike from "../../src/isArrayLike";

import { JSDOM } from "jsdom";

import { expect } from "chai";
import "mocha";

const { document } = new JSDOM(`...`).window;

describe("is array alike", () => {
  //test中document不存在，但是浏览器中这个是应该通过的测试
  it("是类数组", () => {
    const result = isArrayLike(document.body.children);
    expect(result).to.equal(true);
  });
  it("是类数组", () => {
    (function test() {
      const result = isArrayLike(arguments);
      expect(result).to.equal(true);
    })();
  });
  it("是字符串", () => {
    const result = isArrayLike("string");
    expect(result).to.equal(true);
  });
  it("是函数", () => {
    const result = isArrayLike(function() {});
    expect(result).to.equal(false);
  });
  it("是数组", () => {
    const result = isArrayLike([1, 2, 3]);
    expect(result).to.equal(true);
  });
});
