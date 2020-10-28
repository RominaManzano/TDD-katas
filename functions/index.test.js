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

describe('repeatedNotConsecutive', () => {

  it('should return false if they are not consecutive', () => {
    const tests = [9, 10, 9];
    expect(functions.repeatedNotConsecutive(tests)).toBe(false);
  });

  it('It should return true if they are consecutive', () => {
    const tests = [2, 2, 3];
    expect(functions.repeatedNotConsecutive(tests)).toBe(true);
  });
});