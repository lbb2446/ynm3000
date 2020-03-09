import isPlainObject from "../../src/isPlainObject";
import { expect } from "chai";
import "mocha";

function Foo() {
  this.foo = "foo";
}

describe("is plainObject", () => {
  it("是Object", () => {
    const result = isPlainObject({ a: 1 });
    expect(result).to.equal(true);
  });
  it("是Object", () => {
    const result = isPlainObject(Object.create(null));
    expect(result).to.equal(true);
  });
  it("是Object.create有内容的对象", () => {
    const result = isPlainObject(Object.create({ b: 2 }));
    expect(result).to.equal(false);
  });
  it("是实例", () => {
    const result = isPlainObject(new Foo());
    expect(result).to.equal(false);
  });
  it("是null", () => {
    const result = isPlainObject(null);
    expect(result).to.equal(false);
  });
  it("是数组", () => {
    const result = isPlainObject([1, 2, 3]);
    expect(result).to.equal(false);
  });
});
