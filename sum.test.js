const sum = require('./sum');

test('sum(4, 6) devuelve 10', () => {
    expect(sum(4, 6)).toBe(10);
});

test('sum(-3, 8) devuelve 5', () => {
    expect(sum(-3, 8)).toBe(5);
});
