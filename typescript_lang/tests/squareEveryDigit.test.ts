import {assert} from "chai";
import { squareEveryDigit as cut } from "../src/squareEveryDigit"

describe("squareDigits", function() {
  it("should pass the example codeWars test", function() {
    assert.strictEqual(cut.squareDigits(9119), 811181);
  });

  it("should return result of simple number", function() {
    assert.strictEqual(cut.squareDigits(2), 4);
  });

  it("should return result of simple two digit number", function() {
    assert.strictEqual(cut.squareDigits(23), 49);
  });
});