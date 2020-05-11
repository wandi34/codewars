import { hasCorrectBrackets } from "../src/sameBracketNumber";
import {assert} from "chai";

describe('hasCorrectBrackets', function() {
    it('returns true for empty string', function() {
        let result = hasCorrectBrackets("")
        assert.isTrue(result)
    })

    it('returns true for string without brackets', function() {
        let result = hasCorrectBrackets("foo")
        assert.isTrue(result)
    })

    it('returns false for string with one bracket', function() {
        let result = hasCorrectBrackets("foo)")
        assert.isFalse(result)
    })

    it('returns false for string with different numbers of brackets', function() {
        let result = hasCorrectBrackets("(foo(bar)")
        assert.isFalse(result)
    })

    it('returns true for string with many correct brackets', function() {
        let result = hasCorrectBrackets("([{(foo)}])")
        assert.isTrue(result)
    })

    it('returns false for string with many brackets mixed up', function() {
        let result = hasCorrectBrackets("([{(foo})])")
        assert.isFalse(result)
    })

    it('returns true for string with simple brackets', function() {
        let result = hasCorrectBrackets("[]")
        assert.isTrue(result)
    })

    it('returns true for group of brackets', function() {
        let result = hasCorrectBrackets("({})[({})]")
        assert.isTrue(result)
    })
});