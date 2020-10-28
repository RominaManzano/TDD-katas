const functions = require('./index');

describe('getMaxFromList', () => {
    it('should return null if list is empty', () => {
        expect(functions.getMaxFromList([])).toBe(null);
    });

    it('should return max number from give list', () => {
        const tests = [
            { numbers: [1, 2, 3, 4], expected: 4 },
            { numbers: [-1, -2, -3, -4], expected: -1 },
            { numbers: [110, 86, 550, 23], expected: 550 },
        ];

        tests.forEach(({ numbers, expected }) => {
            expect(functions.getMaxFromList(numbers)).toBe(expected);
        });
    });
});

describe('getTodo', () => {
    it("Should return a todo", () => {
        return functions.getTodo().then(data => {
            expect(data).toBeDefined()
        });
    })

    it("A todo should be an object with these props", () => {
        return functions.getTodo().then(data => {
            expect(data).toEqual(
                expect.objectContaining({
                    "userId": expect.any(Number),
                    "id": expect.any(Number),
                    "title": expect.any(String),
                    "completed": expect.any(Boolean)
                })
            )
        });
    })

    it("Should have title", () => {
        return functions.getTodo().then(data => {
            expect(data.title).toEqual('delectus aut autem')
        });
    })
})

describe('isPair', () => {
    it('should return null if the param is not a number', () => {
        expect(functions.isPair('Testing')).toBe(null);
    });

    it('should return true from give list', () => {
        const tests = [2, 20, 22];

        tests.forEach((number) => {
            expect(functions.isPair(number)).toBe(true);
        });
    });

    it('should return false from give list', () => {
        const tests = [3, 15, -1];

        tests.forEach((number) => {
            expect(functions.isPair(number)).toBe(false);
        });
    });
});

describe('checkArray', () => {
    it('should return null if list is empty', () => {
        expect(functions.checkArray([])).toBe(null);
    });

    it('should return yes or no if the array have numbers', () => {
        const tests = [
            { exampleArray: [1, 2, 3, 4], expected: 'yes' },
            { exampleArray: [110, 86, 550, 'Mario'], expected: 'no' },
        ];

        tests.forEach(({ exampleArray, expected }) => {
            expect(functions.checkArray(exampleArray)).toBe(expected);
        });
    });
});

describe('getIndex', () => {
    it('should return the index of the number 3 in the given list', () => {
        const tests = [
            { testArray: [1, 2, 3, 4], expected: 2 },
            { testArray: [110, 43, 456, 'hola'], expected: -1 },
        ];
        tests.forEach(({ testArray, expected }) => {
            expect(functions.getIndex(testArray)).toBe(expected);
        });
    });
});