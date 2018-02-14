# cbp

constraint based programming - a new way to structure your code for better readability and reliability

## Principle

> Don't call a function if you don't have proper inputs to pass to it.

## Working Sample

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

    function additionExample(out = { errors: null, results: [] }) {
        const first = 10
        const second = 20
        if (sum.constraints(first, second)) {
            out.results.push(sum(first, second))
        } else {
            out.errors = [new Error(`sum is not supported for ${first} and ${second}`)]
        }
        return out
    }

    additionExample()

```

Look into `examples/node/src`.

## Benefits

1. Requirements for function are declared in code and are visible.
1. A more defensive approach can be applied too. (discussed later)
1. Tests are easier and cleaner to write.
1. Complex logic comments are converted to constraints.

## Defensive coding

```javascript

    function sum(a, b) {
        if (sum.constraints(a, b)) {
            return a + b
        }
    }

    sum.constraints = function (a, b) {
        const areOfSameType = typeof a === typeof b
        const areOfNumberType = typeof a === typeof 42
        const areSafeToAdd = a + b <= Number.MAX_SAFE_INTEGER
        const areIntegers = a === Math.floor(a) && b === Math.floor(b)
        return areOfSameType && areOfNumberType && areSafeToAdd && areIntegers
    }

    sum(10, 20)
    30
    
    sum(10, Number.MAX_SAFE_INTEGER)
    undefined
    
    sum(10, Number.MAX_SAFE_INTEGER + 1)
    undefined
    
    sum(10, Number.MAX_SAFE_INTEGER - 111)
    9007199254740890

```

This way malicious function calls can't get output. This hardens programs a bit.

## Version 0.1

Follows `Milestone.Change` vesioning.

## License

Primary license is MIT.

Secondary lincense is anything you want. Free to use anyway you want. 
