const coinValues = {
    quarters: 25,
    dimes: 10,
    nickels: 5,
    pennies: 1
  };
  
  const coinCounterRecursive = (amount, coins = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }) => {
    if (amount === 0) {
      return coins;
    }
  
    if (amount >= coinValues.quarters) {
      coins.quarters++;
      return coinCounterRecursive(amount - coinValues.quarters, coins);
    } else if (amount >= coinValues.dimes) {
      coins.dimes++;
      return coinCounterRecursive(amount - coinValues.dimes, coins);
    } else if (amount >= coinValues.nickels) {
      coins.nickels++;
      return coinCounterRecursive(amount - coinValues.nickels, coins);
    } else {
      coins.pennies++;
      return coinCounterRecursive(amount - coinValues.pennies, coins);
    }
  };
  
  module.exports = { coinCounterRecursive };
  