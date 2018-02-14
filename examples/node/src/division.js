function division (a, b) {
    return a / b
}

division.constraints = function (a, b) {
    const areOfSameType = typeof a === typeof b
    const areOfNumberType = typeof a === typeof 42
    const definedMathemaically = b !== 0
    const divideByInteger = b === Math.floor(b)
    const safe = a <= Number.MAX_VALUE && a >= Number.MIN_VALUE && b <= Number.MAX_SAFE_INTEGER && b >= Number.MIN_SAFE_INTEGER
    return areOfSameType && areOfNumberType && definedMathemaically && divideByInteger && safe
}

module.exports = division
