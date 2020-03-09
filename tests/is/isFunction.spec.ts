import isFunction from "../../src/isFunction";

import { expect } from "chai";
import "mocha";

describe("is function", () => {
  it("是function", () => {
    const result = isFunction(function() {});
    expect(result).to.equal(true);
  });
  it("是async", () => {
    const result = isFunction(async function() {});
    expect(result).to.equal(true);
  });
  it("是class", () => {
    const result = isFunction(class A {});
    expect(result).to.equal(true);
  });
  it("是生成器函数", () => {
    //生成器函数，可以暂停函数那个
    const result = isFunction(function* Any() {});
    expect(result).to.equal(true);
  });
  it("是原生提供的函数", () => {
    const result = isFunction(Math.random);
    expect(result).to.equal(true);
  });
  it("是正则", () => {
    const result = isFunction(/abc/);
    expect(result).to.equal(false);
  });
});
