const openingBracketsRegExp = /[(]|[[]|[{]/
const closingBracketsRegExp = /[)]|[\]]|[}]/

export function hasCorrectBrackets(input: string): boolean {
    const chars = [...input]
    let stack = []
    for (var i = 0; i < chars.length; i++) {
        let c = chars[i]
        if (c.match(openingBracketsRegExp) !== null) {
            stack = [c, ...stack]
        }
        if (c.match(closingBracketsRegExp) !== null && stack[0] !== getOpeningBracket(c)) {
            return false
        }
        if (c.match(closingBracketsRegExp) !== null && c === getClosingBracket(stack[0])) {
            stack.shift()
        }
    }

    return stack.length === 0 ? true : false
}

function getClosingBracket(char: String): String {
    if (char === "(") {
        return ")"
    }
    if (char === "[") {
        return "]"
    }
    if (char === "{") {
        return "}"
    }
}

function getOpeningBracket(char: String): String {
    if (char === ")") {
        return "("
    }
    if (char === "]") {
        return "["
    }
    if (char === "}") {
        return "{"
    }
}