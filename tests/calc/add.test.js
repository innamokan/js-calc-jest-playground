const add = require("../../src/calc/add");

test('add 1 + 2 to equal 3', function() {
    expect(add(1, 2)).toBe(3);
});
