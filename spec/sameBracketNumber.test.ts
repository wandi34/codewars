import { hasCorrectBrackets } from "../SameBracketNumber/sameBracketNumber";

describe('hasCorrectBrackets', function() {
    it('returns boolean', function() {
        let result = hasCorrectBrackets("foo")
        expect(result).toBeInstanceOf(Boolean)
    })

    it('returns true for empty string', function() {
        let result = hasCorrectBrackets("")
        expect(result).toBeTrue()
    })

    it('returns true for string without brackets', function() {
        let result = hasCorrectBrackets("foo")
        expect(result).toBeTrue()
    })

    it('returns false for string with one bracket', function() {
        let result = hasCorrectBrackets("foo)")
        expect(result).toBeFalse()
    })

    it('returns false for string with different numbers of brackets', function() {
        let result = hasCorrectBrackets("(foo(bar)")
        expect(result).toBeFalse()
    })

    it('returns true for string with many correct brackets', function() {
        let result = hasCorrectBrackets("([{(foo)}])")
        expect(result).toBeTrue()
    })

    it('returns false for string with many brackets mixed up', function() {
        let result = hasCorrectBrackets("([{(foo})])")
        expect(result).toBeFalse()
    })

    it('returns true for string with simple brackets', function() {
        let result = hasCorrectBrackets("[]")
        expect(result).toBeTrue()
    })

    it('returns true for group of brackets', function() {
        let result = hasCorrectBrackets("({})[({})]")
        expect(result).toBeTrue()
    })
});