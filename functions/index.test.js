const functions = require('./index');

describe('checkArray', () => {
  it('should return null if list is empty', () => {
    expect(functions.checkArray([])).toBe(null);
  });

  it('should return yes or no if the array have numbers', () => {
    const tests = [
      { exampleArray: [1, 2, 3, 4], expected: 'yes'},
      { exampleArray: [110, 86, 550, 'Mario'], expected: 'no' },
    ];

    tests.forEach(({ exampleArray, expected }) => {
      expect(functions.checkArray(exampleArray)).toBe(expected);
    });
  });
});