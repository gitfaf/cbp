function sum(a, b) {
    return a + b
}

sum.constraints = function (a, b) {
    const areOfSameType = typeof a === typeof b
    const areOfNumberType = typeof a === typeof 42
    const areSafeToAdd = a + b <= Number.MAX_SAFE_INTEGER
    const areIntegers = a === Math.floor(a) && b === Math.floor(b)
    return areOfSameType && areOfNumberType && areSafeToAdd && areIntegers
}

module.exports = sum
