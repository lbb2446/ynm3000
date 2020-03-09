import isElement from "../../src/isElement";
import { expect } from "chai";
import "mocha";

import { JSDOM } from "jsdom";
const { document } = new JSDOM(`...`).window;

describe("is element", () => {
  it("是ele", () => {
    const result = isElement(document.body);
    expect(result).to.equal(true);
  });
  it("是字符串", () => {
    const result = isElement("<body></body>");
    expect(result).to.equal(false);
  });
});
