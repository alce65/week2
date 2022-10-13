import { add, subtraction } from './sample.js';

describe('Testing add', () => {
    test('if a = 2 and b = 2 add should be', () => {
        let a = 2;
        let b = 2;
        expect(add(a, b)).toBe(4);
    });

    test('if a = 2 and b = 2 add should be', () => {
        let a = 2;
        let b = 2;
        expect(add(a, b)).toBeLessThan(5);
    });

    test('if a = 0 , return should be "Error"', () => {
        let a = 0;
        let b = 2;
        expect(add(a, b)).toBe('Error');
    });
    test('if b = 0 , return should be "Error"', () => {
        let a = 8;
        let b = 5;
        expect(add(a, b)).toBe('Error');
    });
});

describe('Testing subtraction', () => {
    test('if a = 2 and b = 2 result should be 0', () => {
        let a = 2;
        let b = 2;
        expect(subtraction(a, b)).toBe(0);
    });
});
