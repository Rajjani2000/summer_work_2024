const sum_test = require('./sum');

test("adds 1 + 2 to equal 3", () => {
  expect(sum_test(1, 2)).toBe(3);
});


test("adds 5 + 5 to equal 10", () => {
  expect(sum_test(5, 5)).toBe(11);
});