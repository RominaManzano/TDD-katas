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
  it("Should return a todo",()=>{
    return functions.getTodo().then(data => {
      expect(data).toBeDefined()
  });
  })
  
  it("A todo should be an object with these props",()=>{
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
  
  it("Should have title", ()=>{
    return functions.getTodo().then(data => {
      expect(data.title).toEqual('delectus aut autem')
  });
}) 
})
