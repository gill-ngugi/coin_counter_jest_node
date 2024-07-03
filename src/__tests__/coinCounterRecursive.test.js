const { coinCounterRecursive } = require('../coinCounterRecursive');

describe('coinCounterRecursive', () => {
  test('calculates correct change for $4.99', () => {
    const amountInCents = 499;
    const result = coinCounterRecursive(amountInCents);
    expect(result).toEqual({
      quarters: 19,
      dimes: 2,
      nickels: 0,
      pennies: 4
    });
  });

  test('calculates correct change for $0.41', () => {
    const amountInCents = 41;
    const result = coinCounterRecursive(amountInCents);
    expect(result).toEqual({
      quarters: 1,
      dimes: 1,
      nickels: 1,
      pennies: 1
    });
  });

  test('calculates correct change for $1.00', () => {
    const amountInCents = 100;
    const result = coinCounterRecursive(amountInCents);
    expect(result).toEqual({
      quarters: 4,
      dimes: 0,
      nickels: 0,
      pennies: 0
    });
  });

  test('calculates correct change for $0.00', () => {
    const amountInCents = 0;
    const result = coinCounterRecursive(amountInCents);
    expect(result).toEqual({
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    });
  });
});
