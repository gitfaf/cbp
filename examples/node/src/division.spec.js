const expect = require('chai').expect
const division = require('./division')

describe('division', () => {
    it('object has a constraints function as member', () => {
        expect(typeof division.constraints).to.equal('function')
    })
    const failingConstraintsTests = [
        {
            testString: 'for non integers',
            cases: [
                { a: 10, b: 10.10, expected: false },
            ]
        },
        {
            testString: 'when divisor exceeds Number.MAX_SAFE_INTEGER value',
            cases: [
                { a: Number.MAX_VALUE, b: Number.MAX_SAFE_INTEGER + 1, expected: false },
                { a: Number.MAX_SAFE_INTEGER, b: Number.MAX_SAFE_INTEGER + 1, expected: false }
            ]
        },
        {
            testString: 'when divisor exceeds Number.MIN_SAFE_INTEGER value',
            cases: [
                { a: Number.MIN_VALUE, b: Number.MIN_SAFE_INTEGER - 1, expected: false },
                { a: Number.MIN_SAFE_INTEGER, b: Number.MIN_SAFE_INTEGER - 1, expected: false }
            ]
        },
        {
            testString: 'when dividend exceeds Number.MIN_VALUE or Number.MAX_VALUE value',
            cases: [
                // { a: Number.MAX_VALUE + 1, b: 11, expected: false },
                { a: Number.MIN_VALUE - 1, b: 12, expected: false }
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
    failingConstraintsTests.forEach(t => {
        it(`constraints fail ${t.testString}`, () => {
            t.cases.forEach(c => {
                expect(division.constraints(c.a, c.b)).to.equal(c.expected)
            })
        })
    })
})
