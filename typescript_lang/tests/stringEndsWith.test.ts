import {assert} from "chai";
import { stringEndsWith } from "../src/stringsEndsWith"

describe("stringEndsWith", function() {
  it("should return true for two empty strings", function() {
    assert.isTrue(stringEndsWith("", ""));
  });
  it("should pass codewars examples", function() {
    assert.isTrue(stringEndsWith('abcde', 'cde'));
    assert.isFalse(stringEndsWith('abcde', 'abc'));
    assert.isTrue(stringEndsWith('abc', ''));
  });
});