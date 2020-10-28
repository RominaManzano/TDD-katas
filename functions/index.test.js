const functions = require('./index');
const { verifyPassword } = require('./index');

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

describe('Verify password', () => {
  it('Should check the minimum length of 8 and alphaNumeric conditions', () => {
    const tests = [
      { password: undefined, expected: false},
      { password: '', expected: false },
      { password: 'less8', expected: false },
      { password: 'moreThanEightBuNotAlpha', expected: false },
      { password: 'LimitEi8', expected: true },
      { password: 'thisIsOkPassword8', expected: true },
    ];

    tests.forEach(({ password, expected }) => {
      expect(functions.verifyPassword(password)).toBe(expected);
    });
  });
  describe('Alternative way', () => {
    // Alternative: We write more code but it's easier to find and debug the failing ones.
    it('Should reject empty strings', () => {
      expect(verifyPassword('')).toBe(false);
    });

    it('Should reject undefined passwords', () => {
      expect(verifyPassword()).toBe(false);
    });

    it('Should reject passwords with length minor than 8', () => {
      expect(verifyPassword('less8')).toBe(false);
    });

    it('Should reject non alphanumeric passwords', () => {
      expect(verifyPassword('moreThanEightButNotAlpha')).toBe(false);
      expect(verifyPassword('111122224444')).toBe(false);
    });

    it('Should admit alphanumeric passwords with length of 8 or more', () => {
      expect(verifyPassword('thisIsOkPassword8')).toBe(true);
      expect(verifyPassword('thisIs88')).toBe(true);
    });
  });
});