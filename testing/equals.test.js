import { strictEquals } from './equals.js';

// gherkin - Given - When - Then

describe('Given strictEquals function', () => {
    test(`When parameters are 1 and 1, 
    then result should be true`, () => {
        // Arrange
        const a = 1;
        const b = 1;
        const expectedResult = true;
        // Act
        const result = strictEquals(a, b);
        // Asset
        expect(result).toBe(expectedResult);
    });

    test(`When parameters are NaN and NaN, 
    then result should be false`, () => {
        // Arrange
        const a = NaN;
        const b = NaN;
        const expectedResult = false;
        // Act
        const result = strictEquals(a, b);
        // Asset
        expect(result).toBe(expectedResult);
    });

    test(`When parameters are 0 and -0, 
    then result should be true`, () => {
        // Arrange
        const a = 0;
        const b = -0;
        const expectedResult = true;
        // Act
        const result = strictEquals(a, b);
        // Asset
        expect(result).toBe(expectedResult);
    });

    test(`When parameters are -0 and 0, 
    then result should be true`, () => {
        // Arrange
        const a = -0;
        const b = 0;
        const expectedResult = true;
        // Act
        const result = strictEquals(a, b);
        // Asset
        expect(result).toBe(expectedResult);
    });

    test(`When parameters are 1 and "1", 
    then result should be false`, () => {
        // Arrange
        const a = 1;
        const b = '1';
        const expectedResult = false;
        // Act
        const result = strictEquals(a, b);
        // Asset
        expect(result).toBe(expectedResult);
    });

    test(`When parameters are true and false, 
    then result should be false`, () => {
        // Arrange
        const a = true;
        const b = false;
        const expectedResult = false;
        // Act
        const result = strictEquals(a, b);
        // Asset
        expect(result).toBe(expectedResult);
    });

    test(`When parameters are false and false, 
    then result should be true`, () => {
        // Arrange
        const a = false;
        const b = false;
        const expectedResult = true;
        // Act
        const result = strictEquals(a, b);
        // Asset
        expect(result).toBe(expectedResult);
    });
    test(`When parameters are water and oil, 
    then result should be false`, () => {
        // Arrange
        const a = 'water';
        const b = 'oil';
        const expectedResult = false;
        // Act
        const result = strictEquals(a, b);
        // Asset
        expect(result).toBe(expectedResult);
    });
});
