import isArguments from "../../src/isArguments";

import { expect } from "chai";
import "mocha";

describe("is arguments", () => {
  it("是参数类型", () => {
    (function() {
      const result = isArguments(arguments);
      expect(result).to.equal(true);
    })();
  });
  it("是数组", () => {
    (function() {
      const result = isArguments([1, 2, 3]);
      expect(result).to.equal(false);
    })();
  });
});
