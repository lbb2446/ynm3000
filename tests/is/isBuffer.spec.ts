import isBuffer from "../../src/isBuffer";

import { expect } from "chai";
import "mocha";

describe("is buffer", () => {
  //TODO:第一个报错
  // it("是buffer", () => {
  //   const result = isBuffer(new Buffer(2));
  //   expect(result).to.equal(true);
  // });
  it("不是buffer", () => {
    const result = isBuffer(new Uint8Array(2));
    expect(result).to.equal(false);
  });
});
