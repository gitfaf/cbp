# sum

## Lib

```javascript

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

```

## Tests

```javascript

const expect = require('chai').expect
const sum = require('./sum')

describe('sum', () => {
    it('object has a constraints function as member', () => {
        expect(typeof sum.constraints).to.equal('function')
    })
    const tests = [
        {
            testString: 'for non integers',
            cases: [
                { a: 10, b: 10.10, expected: false },
                { a: 10.10, b: 10, expected: false },
            ]
        },
        {
            testString: 'when sum exceeds Number.MAX_SAFE_INTEGER value',
            cases: [
                { a: Number.MAX_SAFE_INTEGER, b: 10, expected: false },
                { a: 10, b: Number.MAX_SAFE_INTEGER, expected: false }
            ]
        },
        {
            testString: 'when input are not numbers',
            cases: [
                { a: '10', b: 10, expected: false },
                { a: 10, b: '10', expected: false }
            ]
        },

    ]
    tests.forEach(t => {
        it(`constraints fail ${t.testString}`, () => {
            t.cases.forEach(c => {
                expect(sum.constraints(c.a, c.b)).to.equal(c.expected)
            })
        })
    })
})

```
