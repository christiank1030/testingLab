const { returnTwo, greeting, add, multiply, divide, subtract } = require('../functions')

describe('returnTwo Tests', () => {
    test('Does returnTwo return the number 2?', () => {
        expect(returnTwo()).toEqual(2);
    })

    test('Does returnTwo return a number?', () => {
        expect(typeof returnTwo()).toBe('number')
    })

    test('Does returnTwo return a number less than 3?', ()=> {
        expect(returnTwo()).toBeLessThan(3)
    })
});

describe('Greeting Tests', () => {
    test('Does greeting return the correct string?', () => {
        expect(greeting('James')).toEqual("Hello, James.")
        expect(greeting('Jill')).toEqual("Hello, Jill.")
    })

    test('Does greeting return a string?', () => {
        expect(typeof greeting('James')).toBe('string')
    })
});

describe('Math Functions', () => {
    test('Does add return correct sum?', () => {
        expect(add(1, 2)).toEqual(3)
        expect(add(5, 9)).toEqual(14)
    })

    test('Does multiply return the correct product?', () => {
        expect(multiply(4, 5)).toEqual(20)
        expect(multiply(3, 7)).toEqual(21)
    })

    test('Does divide return the correct quotient?', () => {
        expect(divide(18, 2)).toEqual(9)
        expect(divide(6, 3)).toEqual(2)
    })

    test('Does subtract return the correct difference?', () => {
        expect(subtract(10, 6)).toEqual(4)
        expect(subtract(7, 4)).toEqual(3)
    })
});