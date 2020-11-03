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
  it('should return null if the param is not integer', () => {
    expect(functions.isPair('Testing')).toBe(null);
  });

  it('should return true from give even list', () => {
    const tests = [2, 20, 22];

    tests.forEach((number) => {
      expect(functions.isPair(number)).toBe(true);
    });
  });

  it('should return false from give odd list', () => {
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
