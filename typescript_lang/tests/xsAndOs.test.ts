import { assert } from "chai";
import { xo } from "../src/xsAndOs"

describe("XsAndOs", function () {
    it("should return boolean", function () {
        assert.equal(typeof xo(""), "boolean");
    });
    it("should return true for empty String", function () {
        assert.ok(xo(""));
    });
    it("should return true for String without Xs and Os", function () {
        assert.ok(xo("bar"));
    });
    it("should pass codewars tests", function () {
        assert.ok(xo("xo"));
        assert.ok(xo("XO"));
        assert.ok(xo("xo0"));
        assert.notOk(xo("xxxoo"));
        assert.ok(xo("xxOo"));
    });
});