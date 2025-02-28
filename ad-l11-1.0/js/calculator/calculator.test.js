const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 5 by 0 should return Infinity', () => {
  expect(calculator.divide(5, 0)).toBe(Infinity);
});

test('divide 10 by 2 should return 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
