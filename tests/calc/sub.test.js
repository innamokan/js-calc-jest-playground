const sub = require('../../src/calc/sub');

test('should subtract', () => {
    expect(sub(10, 7)).toBe(3);
})
