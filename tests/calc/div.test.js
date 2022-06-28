const div = require('../../src/calc/div');

test('divide 4 / 2 to equal 2', () => {
    expect(div(4, 2)).toBe(2);
});

test('divide 4 / 1 to equal 4', () => {
    expect(div(4, 1)).toBe(4);
});

test('divide 4 / 0 to "Error: devide by zero"', () => {
    expect(div(4, 0)).toBe('Error: devide by zero');
});
